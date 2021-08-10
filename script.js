const mainImg = document.getElementById("main");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

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

page1.addEventListener("click", handleMainImg);
page2.addEventListener("click", handleMainImg);
page3.addEventListener("click", handleMainImg);
