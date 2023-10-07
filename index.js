const arrayImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const arrayNames = ["Mauro", "Lucas", "Joel", "Pipín"];

var randomNumber1;
var randomNumber2;
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");

selectRandomPic1 = function() {
    
    do {

        randomNumber1 = Math.floor(Math.random() * 4);
        console.log("Botón 1: " + randomNumber1);
        image1.src = arrayImages[randomNumber1];
        image1.classList.add("img");
        name1.textContent = arrayNames[randomNumber1];
    }while(randomNumber1 === randomNumber2);
}

selectRandomPic2 = function() {

    do {

        randomNumber2 = Math.floor(Math.random() * 4);
        console.log("Botón 2: " + randomNumber2);
        image2.src = arrayImages[randomNumber2];
        image2.classList.add("img");
        name2.textContent = arrayNames[randomNumber2];
    }while(randomNumber1 === randomNumber2);
}

button1.addEventListener("click", selectRandomPic1);
button2.addEventListener("click", selectRandomPic2);
