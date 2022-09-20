const btn_crear = document.getElementById('crear')

let clientes = window.localStorage.getItem('clientes')

if (clientes != null) {

    clientes = JSON.parse(clientes)

    clientes.forEach(cliente => {
        const fila_plantilla = `<tr>
                                <td>${Random(1000,99999)}</td>
                                <td>${cliente.nombre}</td>
                                <td>${cliente.correo}</td>
                                <td>
                                    <button>Ver</button>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>`

        const tabla = document.querySelector('table')
        tabla.innerHTML = tabla.innerHTML + fila_plantilla

    });

    
}

btn_crear.addEventListener('click', event => {
    event.preventDefault()

    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const correo = document.getElementById('correo').value
    const celular = document.getElementById('celular').value

    //Validaciones

    const cliente = {
        nombre,
        apellido,
        correo,
        celular
    }

    let clientes = window.localStorage.getItem('clientes')

    if (clientes == null) {
        let primer_cliente = []
        primer_cliente.push(cliente)
        window.localStorage.setItem("clientes", JSON.stringify(primer_cliente))
    } else {
        let lista_clientes = JSON.parse(clientes)
        lista_clientes.push(cliente)
        window.localStorage.setItem("clientes", JSON.stringify(lista_clientes))
    }
})


function Random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let btn_mostrar_registro = document.getElementById('mostrar_registro')

btn_mostrar_registro.addEventListener('click', () => {
    let registro = document.querySelector('.registro')

    registro.style.display = 'block'
})