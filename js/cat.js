const overlay = document.querySelector(".overlay1");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const card4 = document.querySelector(".card4");
const wind1 = document.querySelector(".wind1");
const wind2 = document.querySelector(".wind2");
const wind3 = document.querySelector(".wind3");
const wind4 = document.querySelector(".wind4");
const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");
const price4 = document.querySelector(".price4");
const list1 = document.querySelector(".list1");
const list2 = document.querySelector(".list2");
const list3 = document.querySelector(".list3");
const list4 = document.querySelector(".list4");
const cart1 = document.querySelector(".cart1");
const cart2 = document.querySelector(".cart2");
const cart3 = document.querySelector(".cart3");
const cart4 = document.querySelector(".cart4");
const closebtn = document.querySelectorAll(".closebtn");
const counterMain = document.querySelector(".counterMain");


let cartC = 0;
let c = 0;
console.log(counterMain);
function openFirstM() {
    overlay.classList.remove("hide");
    wind1.classList.remove("hide");
    cart1.querySelector(".sumcart").innerHTML = cartC;
}

function addToCartFirst() {
    cartC += +price1.querySelector(".counter").textContent * +list1.value;
    cart1.querySelector(".sumcart").innerHTML = cartC;
    c += +list1.value;
}

function openSecondM() {
    overlay.classList.remove("hide");
    wind2.classList.remove("hide");
    cart2.querySelector(".sumcart").innerHTML = cartC;
}

function addToCartSecond() {
    cartC += +price2.querySelector(".counter").textContent * +list2.value;
    cart2.querySelector(".sumcart").innerHTML = cartC;
    c += +list2.value;
}

function openThirdM() {
    overlay.classList.remove("hide");
    wind3.classList.remove("hide");
    cart3.querySelector(".sumcart").innerHTML = cartC;
}

function addToCartThird() {
    cartC += +price3.querySelector(".counter").textContent * +list3.value;
    cart3.querySelector(".sumcart").innerHTML = cartC;
    c += +list3.value;
}

function openFM() {
    overlay.classList.remove("hide");
    wind4.classList.remove("hide");
    cart4.querySelector(".sumcart").innerHTML = cartC;
}

function addToCartF() {
    cartC += +price4.querySelector(".counter").textContent * +list4.value;
    cart4.querySelector(".sumcart").innerHTML = cartC;
    c += +list4.value;
}

function closeModal() {
    console.log(c);
    counterMain.innerHTML = c;
    overlay.classList.add("hide");
    wind1.classList.add("hide");
    wind2.classList.add("hide");
    wind3.classList.add("hide");
    wind4.classList.add("hide");
    cart1.querySelector(".sumcart").innerHTML = "0";
    cart2.querySelector(".sumcart").innerHTML = "0";
    cart3.querySelector(".sumcart").innerHTML = "0";
    cart4.querySelector(".sumcart").innerHTML = "0";  
}

closebtn.forEach(e => {
    e.addEventListener("click", closeModal);
});
card1.addEventListener("click", openFirstM);
cart1.addEventListener("click", addToCartFirst);
card2.addEventListener("click", openSecondM);
cart2.addEventListener("click", addToCartSecond);
card3.addEventListener("click", openThirdM);
cart3.addEventListener("click", addToCartThird);
card4.addEventListener("click", openFM);
cart4.addEventListener("click", addToCartF);