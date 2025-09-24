let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Escriba un nombre válido");
        return;
    }

    // Verificar que no esté repetido
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya fue ingresado");
        input.value = "";
        input.focus();
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();

    // limpiar el input después de agregar
    input.value = "";
    input.focus();
}

function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía, primero agregue nombres.");
        return;
    }

    const indice = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indice];

    const resultado = document.getElementById("resultado");
    resultado.textContent = `🎉 El amigo sorteado es: ${amigoSorteado}`;

    // Reiniciar el juego
    listaAmigos = [];
    mostrarLista();
}
