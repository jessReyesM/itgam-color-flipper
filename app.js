const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//get the button element
const btn = document.getElementById("btn");
//get the color element
const color = document.querySelector(".color");
//add event listener to the button
btn.addEventListener("click", ()=>{
    //obtener un numero aleatorio entre 0 y 3
    const randomNumber = getRandomNumber();
    // seleccionando un elemento del arreglo colors
    const colorPicked = colors[randomNumber];
    //cambiar el color de fondo
    document.body.style.backgroundColor = colorPicked;
    //cambiar el color de texto
    color.textContent = colorPicked;
});

//funcion para obtener un numero aleatorio entre 0 y 3
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}