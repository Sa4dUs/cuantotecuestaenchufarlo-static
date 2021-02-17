const apiContainer = document.getElementById("api-connection")
const consumeContainer = document.querySelector('input[name="consumo"')
const timeContainer = document.querySelector('input[name="tiempo"')

const date = new Date()
const Time = date.getHours()
const nowDate = `${date.getFullYear()}-0${date.getMonth()}-${date.getDate()}`

const url = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${nowDate}T${Time}:00&end_date=${nowDate}T${Time}:59&time_trunc=hour`
async function getData() {
    var data = await fetch(url)
        .then(response => response.json())
        .then(data => data["included"][0]["attributes"]["values"][0]["value"])
    apiContainer.value = (data / 1000).toFixed(4)
}
getData()

const divResultado = document.getElementById("result")
document.getElementById("botonCalcular").addEventListener("click", () => {
    resultado = apiContainer.value * consumeContainer.value * timeContainer.value
    if (resultado != 0) {
        divResultado.innerHTML = `<div class="resultado">
        <input type="text" class="label" value="Precio estimado:" readonly>
        <input type="number" name="resultado" value="${resultado}" readonly>
        <input type="text" class="label" value="€" readonly>
        </div>`
    }

    else {
        divResultado.innerHTML = `<div class="error">
        <p><b>Por favor introduzca valores válidos en todos los campos</b></p>
        </div>`
    }

})
