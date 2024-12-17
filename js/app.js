const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://api.sheetbest.com/sheets/5c18746a-2aab-4a6e-b420-43e2a6c99b43', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Consigna": formulario.consigna.value,
            "Slot Time": formulario.slot_time.value,
            "Driver": formulario.driver.value,
            "Legajo": formulario.legajo.value,
            "Placa": formulario.placa.value
            
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
