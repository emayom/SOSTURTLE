const mainImg = document.getElementById("main");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

const amount = document.getElementById("amount");
const period = document.getElementById("period");
const value = document.getElementById("value");

const donate = document.getElementById("donate-btn");
const modal = document.getElementById("thanks-bg");
const modal_close = document.getElementById("modal-close");

const email_input = document.getElementById("email-input");
const email_submit = document.getElementById("email-btn");

const IMG_SRC = "https://emayom.github.io/SOSTURTLE/img/";
const IMG = ["main_img.png", "main_img2.jpg", "main_img3.jpeg"];

function handleMainImg(event) {
    const target = event.srcElement.id;

    if(target === "page-1") {
        mainImg.src = `${IMG_SRC}${IMG[0]}`;
    } else if(target === "page-2") {
        mainImg.src = `${IMG_SRC}${IMG[1]}`;
    } else if (target === "page-3"){
        mainImg.src = `${IMG_SRC}${IMG[2]}`;
    }
}

const HIDDEN_CLASSNAME = "hidden";

function openModal() {

    let pd;

    switch(period.value) {
        case "Annually":
            pd = "year";
            break;
        case  "Monthly":
            pd = "month";
            break;
        case "Weekly":
            pd = "week";
            break;
        default:
            pd = "day";
            break;
    }

    value.innerHTML = `${amount.value}.00 every ${pd}`;

    modal.classList.remove(HIDDEN_CLASSNAME);
}

function closeModal() {
    modal.classList.add(HIDDEN_CLASSNAME);
}

const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

function handleEmailSubmit(event) {
    event.preventDefault();

    if(!email_input.value == ""){
        if(isValid(email_input.value)){
            email_input.value = "";
        } else {
            alert("Email is not valid.");
            email_input.value = "";
        }
    }
}

function isValid(email) {
    return emailValidation.test(email);
}

page1.addEventListener("click", handleMainImg);
page2.addEventListener("click", handleMainImg);
page3.addEventListener("click", handleMainImg);

donate.addEventListener("click", openModal);
modal_close.addEventListener("click", closeModal);
email_submit.addEventListener("click", handleEmailSubmit);

window.onclick = function(event) {
    if(event.target == modal) {
        closeModal();
    }
}

// window.addEventListener("click", function(event) {
//     if(event.target == modal){
//         closeModal();
//     }
// });
