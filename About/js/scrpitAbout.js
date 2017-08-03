var icon11 = document.querySelector(".icon11")
var icon22 = document.body.querySelector(".icon22")
var icon33=document.body.querySelector(".icon33")
var h1=document.body.querySelector(".h1")
var h2=document.body.querySelector(".h2")
var h3=document.body.querySelector(".h3")
icon11.addEventListener("mouseover", myFunc1)
function myFunc1(){
icon11.style.background = "#53b778"
h1.style.color = "#53b778"

}

icon11.addEventListener("mouseleave", myFunc2)
function myFunc2(){
icon11.style.background = "#f5f6f7"
h1.style.color = "black"

}


icon22.addEventListener("mouseover", myFunc3)
function myFunc3(){
icon22.style.background = "#53b778"
h2.style.color = "#53b778"

}

icon22.addEventListener("mouseleave", myFunc4)
function myFunc4(){
icon22.style.background = "#f5f6f7"
h2.style.color = "black"

}


icon33.addEventListener("mouseover", myFunc5)
function myFunc5(){
icon33.style.background = "#53b778"
h3.style.color = "#53b778"

}

icon33.addEventListener("mouseleave", myFunc6)
function myFunc6(){
icon33.style.background = "#f5f6f7"
h3.style.color = "black"

}