const mainImg = document.getElementById("main");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

const amount = document.getElementById("amount");
const period = document.getElementById("period");
const value = document.getElementById("value");

const donate = document.getElementById("donate-btn");
const modal = document.getElementById("thanks");
const modal_close = document.getElementById("modal-close");

function handleMainImg(event) {
    const target = event.srcElement.id;

    if(target === "page-1") {
        mainImg.src = "https://emayom.github.io/SOSTURTLE/img/main_img.png"
    } else if(target === "page-2") {
        mainImg.src = "https://emayom.github.io/SOSTURTLE/img/main_img2.jpg"
    } else if (target === "page-3"){
        mainImg.src = "https://emayom.github.io/SOSTURTLE/img/main_img3.jpeg"
    }
}

const HIDDEN_CLASSNAME = "hidden";

function openModal() {
    value.innerHTML = `You donate ${amount.value}$ for a billion baby turtle. ${period.value}`;

    modal.classList.remove(HIDDEN_CLASSNAME);
}

function closeModal() {
    modal.classList.add(HIDDEN_CLASSNAME);
}

page1.addEventListener("click", handleMainImg);
page2.addEventListener("click", handleMainImg);
page3.addEventListener("click", handleMainImg);

donate.addEventListener("click", openModal);
modal_close.addEventListener("click", closeModal);

