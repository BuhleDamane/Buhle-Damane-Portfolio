document.addEventListener("DOMContentLoaded", function() {
 
    function buttonClick(event) {
        event.preventDefault(); 
        alert("This page is currently under Construction, we apologize for the inconvenience.");
    }

    let constructionButtons = document.getElementsByClassName("law-btn");

    for (let i = 0; i < constructionButtons.length; i++) {
        constructionButtons[i].addEventListener("click", buttonClick);
    }
});


let images = ['display1.jpg', 'display6.jpg']; 
let time1 = 3000;  
let i1 = 0; 


function changeImg() {
    document.getElementById('display').src = images[i1];

    if (i1 < images.length - 1) {
        i1++;
    } else {
        i1 = 0;
    }
    setTimeout(changeImg, time1);
}


function init() {
    changeImg();
}

window.onload = init;

