const btn_crear = document.getElementById('crear')

let clientes = window.localStorage.getItem('clientes')

if (clientes != null) {
    clientes = JSON.parse(clientes)

    clientes.forEach(cliente => {
        cargar_cliente(cliente)

    });
}

function cargar_cliente(cliente) {
    const fila_plantilla = `<tr>
                                <td>${cliente.id}</td>
                                <td>${cliente.nombre}</td>
                                <td>${cliente.correo}</td>
                                <td>
                                    <button class='ver'>Ver</button>
                                    <button class='editar'>Editar</button>
                                    <button class='eliminar'>Eliminar</button>
                                </td>
                            </tr>`

    const tabla = document.querySelector('table')
    tabla.innerHTML = tabla.innerHTML + fila_plantilla
}

btn_crear.addEventListener('click', event => {
    event.preventDefault()

    const id = uuidv4()
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const correo = document.getElementById('correo').value
    const celular = document.getElementById('celular').value

    //Validaciones

    const cliente = {
        id,
        nombre,
        apellido,
        correo,
        celular
    }

    cargar_cliente(cliente)

    cambio_pantalla()

    let clientes = window.localStorage.getItem('clientes')
    let lista_cliente = []

    if (clientes != null) {
        lista_cliente = JSON.parse(clientes)
    }

    lista_cliente.push(cliente)
    window.localStorage.setItem("clientes", JSON.stringify(lista_cliente))
})


function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}


let btn_mostrar_registro = document.getElementById('mostrar_registro')

btn_mostrar_registro.addEventListener('click', cambio_pantalla)

function cambio_pantalla() {
    let registro = document.querySelector('.registro')
    let tabla = document.querySelector('.lista')

    if (btn_mostrar_registro.textContent == '+') {
        registro.style.display = 'block'
        tabla.style.display = 'none'

        btn_mostrar_registro.textContent = 'Cancelar'
    } else {
        registro.style.display = 'none'
        tabla.style.display = 'block'

        btn_mostrar_registro.textContent = '+'
    }
}

let btns_eliminar = document.querySelectorAll('.eliminar')

btns_eliminar.forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.parentElement.parentElement.firstElementChild.textContent

        let clientes = window.localStorage.getItem('clientes')

        if (clientes != null) {
            clientes = JSON.parse(clientes)
            clientes = clientes.filter(cliente => cliente.id != id);

            window.localStorage.setItem('clientes', JSON.stringify(clientes))

            btn.parentElement.parentElement.remove()
        }
    })
});
