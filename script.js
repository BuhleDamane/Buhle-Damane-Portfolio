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
let techImages = ['iced tea.jpg', 'Weather App Screenshot.jpeg', 'Calculator Screenshot (2).jpeg', 'World Clock Screenshot.jpeg', 'Dictionary.jpeg', 'Job Application.jpeg']; // Images for the tech image
let time1 = 3000; 
let time2 = 2000; 
let i1 = 0; 
let i2 = 0; 

function changeImg() {
    document.getElementById('display').src = images[i1];

    if (i1 < images.length - 1) {
        i1++;
    } else {
        i1 = 0;
    }
    setTimeout(changeImg, time1);
}

function techImg() {
    document.getElementById('technology').src = techImages[i2];

    if (i2 < techImages.length - 1) {
        i2++;
    } else {
        i2 = 0;
    }
    setTimeout(techImg, time2);
}

function init() {
    changeImg();
    techImg();
}

window.onload = init;

