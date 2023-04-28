const tarjetaHTML = document.querySelector("#tarjeta-recurso")

function mostrarTarjeta(){
    fetch("recursos.json")
    .then(response => response.json())
    .then(data => {
        for(recurso of data){
            tarjetaHTML.innerHTML +=`
                <div class="tarjeta-recurso" id="tarjeta-recurso">
                <div class="tecnologia-recurso">${recurso.tecnologia}</div>
                <div class="informacion-recurso">
                    <div class="titulo-recurso">${recurso.titulo}</div>
                    <div class="descripcion-recurso">${recurso.descripcion}</div>
                </div>
                <div class="url"><a href="${recurso.url}">Click aquí</a></div>
                </div>
            `
        }
    })

    .catch(error => console.log(error))
}

mostrarTarjeta()