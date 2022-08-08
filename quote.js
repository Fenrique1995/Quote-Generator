const FRASE = document.getElementById("quote");
const AUTHOR = document.getElementById("name");
const BOTON = document.querySelector("button");


function frasesRandom() {
    let url = fetch("https://api.quotable.io/random");
    url.then(res => res.json()).then(result => {
        
        FRASE.innerText = result.content;
        AUTHOR.innerText = result.author;
    })
}
frasesRandom();
BOTON.addEventListener("click", frasesRandom);