let a =0;

const like = () => {
    a = a + 1;
    document.getElementById("megusta").innerHTML = a + " me gusta";
    document.getElementById("corazon").style.color="red";
}


const registrar = () => {
    let contenidoboton = document.getElementById("btnregistrar").innerHTML
    if (contenidoboton == "Registrar") {
        document.getElementById("boxconfircontrasena").style.display = "flex";
        document.getElementById("btnlogin").style.display = "none";
        document.getElementById("btnregistrar").innerHTML = "Crear nuevo usuario"
    } else {
        contrasena = document.getElementById("inputcontrasena").value;
        confircontrasena = document.getElementById("inputconfircontrasena").value
        if (contrasena == confircontrasena){
            let usuario = document.getElementById("inputusuario").value;
            let contrasena = document.getElementById("inputcontrasena").value;
            localStorage.setItem(usuario, contrasena)
            alert("Se ha creado un nuevo usuario")
        }else{
            alert("contraseñas incorrectas")
        }
    }
}

const login = () => {
    let usuario = document.getElementById("inputusuario").value;
    let contrasena = document.getElementById("inputcontrasena").value;
    let contrasenastore = localStorage.getItem(usuario)
    console.log(contrasenastore)
    if (contrasena == contrasenastore) {
        alert("Bienvenido")
    }else{
        alert("Usuario o contraseña incorrecta")
    }
}



let contrasena = "";
let confircontrasena = "";

const vercontrasena = () => {
    let ojito = document.getElementById("imgojito").src
    if ( ojito.includes("novisible.svg")) {
        document.getElementById("imgojito").src ="visible.svg"
        document.getElementById("inputcontrasena").type = "password"
    } else {
        document.getElementById("imgojito").src ="novisible.svg"
        document.getElementById("inputcontrasena").type = "text"
    }
}

let boton = document.getElementById("btnver");
boton.addEventListener("click", vercontrasena)

const vercontrasena2 = () => {    
    let ojito2 = document.getElementById("imgojito2").src
    if ( ojito2.includes("novisible.svg")) {
        document.getElementById("imgojito2").src ="visible.svg"
        document.getElementById("inputconfircontrasena").type = "password"
    } else {
        document.getElementById("imgojito2").src ="novisible.svg"
        document.getElementById("inputconfircontrasena").type = "text"
    }
}

const fotos = [
    {usuario: "Josefina Flores", imgusuario: "usuario1.jpg", imagen: "zapatillas1.jpg", megustas: "0", comentrios: "0"},
    {usuario: "Mia Cerrudo", imgusuario: "usuario2.jpg", imagen: "vans.jpg", megustas: "0", comentrios: "0"},
    {usuario: "Eugenia Codaro", imgusuario: "usuario3.jpg", imagen: "adidas.jpg", megustas: "0", comentrios: "0"}
]

function cargarfotos(){
    for(const fotos of fotos){
        let contenedor = document.createElement("div")
        contenedor.innerHTML= `<div id="boxusuario">
                <img src="usuario.webp" alt="" id="imgusuario">
                <h2>${fotos.usuario}</h2>
            </div>
            <img src="foto1.webp" alt="foto de paisaje" id="imgfoto">
            <div id="boxbotones">
                <button onclick="like()">
                    <span class="material-symbols-outlined" id="corazon">
                    favorite
                    </span>
                </button>
                <button>
                    <span class="material-symbols-outlined">
                        chat_bubble
                    </span>
                </button>
                <button>
                    <span class="material-symbols-outlined">
                        send
                    </span>
                </button>
            </div>
            <div class="boxmegusta">
                <p id="megusta">O me gusta</p>
            </div>`
        document.body.appendChild(contenedor)
    }
}

cargarfotos()