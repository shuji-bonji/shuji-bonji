const button = document.getElementById("mikuro");
const audioElm = new Audio('nya-.mp3');
audioElm.loop = false;
audioElm.controls = false;


button.addEventListener("click", function () {

  audioElm.play();
});