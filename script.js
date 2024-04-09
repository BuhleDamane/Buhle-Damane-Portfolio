document.addEventListener("DOMContentLoaded", function() {
    // Function to handle button click
    function buttonClick(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        alert("This page is currently under Construction, we apologize for the inconvenience.");
    }

    // Get all elements with class name "law-btn"
    let constructionButtons = document.getElementsByClassName("law-btn");

    // Loop through each button and add click event listener
    for (let i = 0; i < constructionButtons.length; i++) {
        constructionButtons[i].addEventListener("click", buttonClick);
    }
});

let i = 0;
let images = [];
let time = 3000;

images[0] = `display1.jpg`
images[1] = `display6.jpg`

function changeImg(){
document.display.src = images[i]

if (i < images.length - 1){
i++;
}
else{
    i = 0
}
setTimeout("changeImg()", time);
}

window.onload = changeImg;


