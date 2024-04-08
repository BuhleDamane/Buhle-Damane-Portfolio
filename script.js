let i = 0;
let images = [];
let time = 4000;

images[0] = `display1.jpg`
images[1] = `display 2.jpg`
images[2] = `display3.jpg`

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