var cursor = document.querySelector(".slider")
console.log(cursor)
var sliderover = document.body.querySelector(".sliderover")
console.log(sliderover)
var btn1 = document.querySelector(".btn1")
console.log(btn1)
var btn2 = document.querySelector(".btn2")
console.log(btn2)
var btn3 = document.querySelector(".btn3")
console.log(btn3)



btn1.addEventListener("click", myFunc1)
function myFunc1(){
sliderover.style.transition = "all 0.5s ease";
sliderover.style.left = "-0px"
btn1.style.border = "1px solid #53b778"
btn2.style.border = "0px solid #53b778"
btn3.style.border = "0px solid #53b778"
}




btn2.addEventListener("click", myFunc2)
function myFunc2(){
sliderover.style.transition = "all 0.5s ease";
sliderover.style.left = "-550px"
btn1.style.border = "0px solid #53b778"
btn2.style.border = "1px solid #53b778"
btn3.style.border = "0px solid #53b778"
}

btn3.addEventListener("click", myFunc3)
function myFunc3(){
sliderover.style.transition = "all 0.5s ease";
sliderover.style.left = "-1110px"
btn1.style.border = "0px solid #53b778"
btn2.style.border = "0px solid #53b778"
btn3.style.border = "1px solid #53b778"
}

