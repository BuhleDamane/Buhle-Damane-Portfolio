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