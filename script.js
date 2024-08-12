
// Animação de digitação do nome
function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 75 * i,)
    })
}

const name = document.querySelector('h2');
typeWriter(name)



//Animação do slide
let count = 1;
document.getElementById('radio1').checked = true;

setInterval( function(){
    nextImage();
}, 7000)

function nextImage() {
    count++;
    if( count > 4){
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;

}