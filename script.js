const formulario = document.querySelector("#agregar-recurso")
const datos = document.querySelector("#formulario")
const recursos = []


formulario.addEventListener("submit", (event) =>{
    event.preventDefault()
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const tecnologia = [];
    checkboxes.forEach((checkbox) => {
        tecnologia.push(checkbox.value);
        });
       
    
    recursos.push({
        "titulo": datos.titulo.value,
        "url": datos.url.value,
        "tecnologia_relacionada": tecnologia[0],
        "tipo_recurso": datos.type.value,
        "descripcion": datos.descripcion.value,
    })
     
    console.log(recursos)
})

