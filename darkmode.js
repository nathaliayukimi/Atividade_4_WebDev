let corpo = document.querySelector("body");
corpo.classList.add("body");

let h1 = document.querySelector("h1");
h1.classList.add("h1");

const buttonnormal = document.querySelectorAll("button");
buttonnormal[0].classList.add("button");
buttonnormal[1].classList.add("button");
buttonnormal[2].classList.add("button");

let h2 = document.querySelectorAll("h2");
h2[0].classList.add("h2");
h2[1].classList.add("h2");

let texto = document.querySelectorAll(".para");
texto[0].classList.add("p")
texto[1].classList.add("p")
texto[2].classList.add("p")
texto[3].classList.add("p")
texto[4].classList.add("p")

let ol = document.querySelector("ol");
ol.classList.add("ol");

let ul = document.querySelector("ul");
ul.classList.add("ul");


function darkmode(){
    corpo.classList.toggle("bodydark");
    h1.classList.toggle("h1dark");
    buttonnormal[0].classList.toggle("buttondark");
    buttonnormal[1].classList.toggle("buttondark");
    buttonnormal[2].classList.toggle("buttondark");
    h2[0].classList.toggle("h2dark");
    h2[1].classList.toggle("h2dark")
    texto[0].classList.toggle("pdarkmode");
    texto[1].classList.toggle("pdarkmode");
    texto[2].classList.toggle("pdarkmode");
    texto[3].classList.toggle("pdarkmode");
    texto[4].classList.toggle("pdarkmode");
    ol.classList.toggle("oldark");
    ul.classList.toggle("uldark");
}