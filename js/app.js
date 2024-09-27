const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://sheet.best/api/sheets/44093627-9d13-4465-bb84-4e4f292f0601', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Consigna": formulario.consigna.value,
            "Slot Time": formulario.slot_time.value,
            "Monto": formulario.monto.value,
            "Pago": formulario.pago.value,
            "Driver": formulario.driver.value,
            "Observaciones": formulario.observaciones.value,
            "Tienda": formulario.tienda.value,
            "Legajo": formulario.legajo.value,
            "Placa": formulario.placa.value,
            "Km Inicial": formulario.km_inicial.value,
            "Km Final": formulario.km_final.value
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
