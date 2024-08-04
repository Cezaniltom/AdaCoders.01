function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i)
    })
}

const name = document.querySelector('h2');
typeWriter(name)

// typeWriter(document.querySelector('p'));
