const foto= (num)=>{
  document.getElementById("visor").src = `img/factura-electrica-${num}.jpg`
  document.getElementById("visor").alt = `Factura ${num}/3`
}