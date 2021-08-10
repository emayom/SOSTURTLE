const mainImg = document.getElementById("main");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

function handleMainImg(event) {
    const target = event.srcElement.id;

    console.log(mainImg.src);

    if(target === "page-1") {
        mainImg.src = "/img/main_img.png"
    } else if(target === "page-2") {
        
        console.log("p2");
        mainImg.src = "/img/main_img2.jpg"
    } else if (target === "page-3"){
        console.log("p3");
        mainImg.src = "/img/main_img5.jpeg"

    }
}

// img/main_img.png

page1.addEventListener("click", handleMainImg);
page2.addEventListener("click", handleMainImg);
page3.addEventListener("click", handleMainImg);
