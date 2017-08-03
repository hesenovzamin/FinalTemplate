var name2 = document.querySelector(".name")
console.log(name2)
var email = document.body.querySelector(".email")
console.log(email)
var phone=document.body.querySelector(".phone")
console.log(phone)
var website=document.body.querySelector(".website")
var message=document.body.querySelector(".message")
name2.addEventListener("click", myFunc5)
function myFunc5(){
name2.style.transition = "all 0.5s ease"
name2.style.borderBottom = "2px solid #53b778"
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #d5d5d5"
}
email.addEventListener("click", myFunc1)
function myFunc1(){
email.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #53b778"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #d5d5d5"
name2.style.borderBottom = "2px solid #d5d5d5"
}
phone.addEventListener("click", myFunc2)
function myFunc2(){
phone.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #53b778"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #d5d5d5"
name2.style.borderBottom = "2px solid #d5d5d5"
}
website.addEventListener("click", myFunc3)
function myFunc3(){
website.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #53b778"
message.style.borderBottom = "2px solid #d5d5d5"
name2.style.borderBottom = "2px solid #d5d5d5"
}
message.addEventListener("click", myFunc4)
function myFunc4(){
message.style.transition = "all 0.5s ease";
email.style.borderBottom = "2px solid #d5d5d5"
phone.style.borderBottom = "2px solid #d5d5d5"
website.style.borderBottom = "2px solid #d5d5d5"
message.style.borderBottom = "2px solid #53b778"
name2.style.borderBottom = "2px solid #d5d5d5"
}


var icon1 = document.querySelector(".icon-magnifier")
console.log(icon1)
var icon2 = document.querySelector(".icon-archery")
console.log(icon2)
var icon3 = document.querySelector(".icon-flag")
console.log(icon3)
var icon4 = document.querySelector(".icon-papers")
console.log(icon4)
var icon5 = document.querySelector(".icon-pie-chart")
console.log(icon5)

var icon11 = document.querySelector(".fa-search")
console.log(icon11)
var icon22 = document.querySelector(".fa-spinner")
console.log(icon22)
var icon33 = document.querySelector(".fa-flag-o")
console.log(icon33)
var icon44 = document.querySelector(".fa-newspaper-o")
console.log(icon44)
var icon55 = document.querySelector(".fa-pie-chart")
console.log(icon55)


var slide1 = document.querySelector(".slide1")
console.log(slide1)
var slide2 = document.querySelector(".slide2")
console.log(slide2)
var slide3 = document.querySelector(".slide3")
console.log(slide3)
var slide4 = document.querySelector(".slide4")
console.log(slide4)
var slide5 = document.querySelector(".slide5")
console.log(slide5)
var li1 = document.querySelector(".li1")
console.log(li1)
var li2 = document.querySelector(".li2")
console.log(li2)
var li3 = document.querySelector(".li3")
console.log(li3)
var li4 = document.querySelector(".li4")
console.log(li4)
var p1 = document.querySelector(".p1")
console.log(p1)
var p2 = document.querySelector(".p2")
console.log(p2)
var p3 = document.querySelector(".p3")
console.log(p3)
var p4 = document.querySelector(".p4")
console.log(p4)
var p5 = document.querySelector(".p5")
console.log(p5)


icon1.addEventListener("click", myFunc6)
function myFunc6(){
	icon22.style.color = 'black'
	icon33.style.color = 'black'
	icon44.style.color = 'black'
	icon55.style.color = 'black'
	p2.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p2.style.color = "#606060"
	p3.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p3.style.color = "#606060"
	p4.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p4.style.color = "#606060"
	p5.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p5.style.color = "#606060"
	li1.style.background = '#e5e5e5'
	li2.style.background = '#e5e5e5'
	li3.style.background = '#e5e5e5'
	li4.style.background = '#e5e5e5'
	slide1.style.display = "block"
	 icon2.style.border = "2px solid #e5e5e5"
	icon2.style.background = "#e5e5e5"
	icon3.style.border = "2px solid #e5e5e5"
	icon3.style.background = "#e5e5e5"
	icon4.style.border = "2px solid #e5e5e5"
	icon4.style.background = "#e5e5e5"
	icon5.style.border = "2px solid #e5e5e5"
	icon5.style.background = "#e5e5e5"
	slide2.style.display = "none"
	slide3.style.display = "none"
	slide4.style.display = "none"
	slide5.style.display = "none"
}
 
icon2.addEventListener("click", myFunc7)
function myFunc7(){
	icon33.style.color = 'black'
	icon44.style.color = 'black'
	icon55.style.color = 'black'
	icon22.style.color = '#53b778'
	p2.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p2.style.color = "#53b778"
	p3.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p3.style.color = "#606060"
	p4.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p4.style.color = "#606060"
	p5.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p5.style.color = "#606060"
	li1.style.background = '#53b778'
	li2.style.background = '#e5e5e5'
	li3.style.background = '#e5e5e5'
	li4.style.background = '#e5e5e5'
	slide1.style.display = "none"
	slide2.style.display = "block"
     icon2.style.border = "2px solid #53b778"
	icon2.style.background = "white"
	icon3.style.border = "2px solid #e5e5e5"
	icon3.style.background = "#e5e5e5"
	icon4.style.border = "2px solid #e5e5e5"
	icon4.style.background = "#e5e5e5"
	icon5.style.border = "2px solid #e5e5e5"
	icon5.style.background = "#e5e5e5"
	slide3.style.display = "none"
	slide4.style.display = "none"
	slide5.style.display = "none"
}

icon3.addEventListener("click", myFunc8)
function myFunc8(){
	icon44.style.color = 'black'
	icon55.style.color = 'black'
	icon22.style.color = '#53b778'
	icon33.style.color = '#53b778'
	p2.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p2.style.color = "#53b778"
	p3.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p3.style.color = "#53b778"
	p4.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p4.style.color = "#606060"
	p5.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p5.style.color = "#606060"
	li3.style.background = '#e5e5e5'
	li4.style.background = '#e5e5e5'
	li2.style.background = '#53b778'
	li1.style.background = '#53b778'
	slide1.style.display = "none"
	slide2.style.display = "none"
	slide3.style.display = "block"
	icon2.style.border = "2px solid #53b778"
	icon2.style.background = "white"
	icon3.style.border = "2px solid #53b778"
	icon3.style.background = "white"
	icon4.style.border = "2px solid #e5e5e5"
	icon4.style.background = "#e5e5e5"
	icon5.style.border = "2px solid #e5e5e5"
	icon5.style.background = "#e5e5e5"
	slide4.style.display = "none"
	slide5.style.display = "none"
}

icon4.addEventListener("click", myFunc9)
function myFunc9(){
	icon55.style.color = 'black'
	icon22.style.color = '#53b778'
	icon33.style.color = '#53b778'
	icon44.style.color = '#53b778'
	p2.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p2.style.color = "#53b778"
	p3.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p3.style.color = "#53b778"
	p4.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p4.style.color = "#53b778"
	p5.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p5.style.color = "#606060"
	li4.style.background = '#e5e5e5'
	li3.style.background = '#53b778'
	li2.style.background = '#53b778'
	li1.style.background = '#53b778'
	slide1.style.display = "none"
	slide2.style.display = "none"
	slide3.style.display = "none"
	slide4.style.display = "block"
	icon2.style.border = "2px solid #53b778"
	icon2.style.background = "white"
	icon3.style.border = "2px solid #53b778"
	icon3.style.background = "white"
	icon4.style.border = "2px solid #53b778"
	icon4.style.background = "white"
	slide5.style.display = "none"
	icon5.style.border = "2px solid #e5e5e5"
	icon5.style.background = "#e5e5e5"
}

icon5.addEventListener("click", myFunc10)
function myFunc10(){
	icon22.style.color = '#53b778'
	icon33.style.color = '#53b778'
	icon44.style.color = '#53b778'
	icon55.style.color = '#53b778'
	p2.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p2.style.color = "#53b778"
	p3.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p3.style.color = "#53b778"
	p4.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p4.style.color = "#53b778"
	p5.style.transition = "all 0.7s cubic-bezier(1, -0.17, 0, 4.18)"
	p5.style.color = "#53b778"
	li4.style.background = '#53b778'
	li3.style.background = '#53b778'
	li2.style.background = '#53b778'
	li1.style.background = '#53b778'
	slide1.style.display = "none"
	slide2.style.display = "none"
	slide3.style.display = "none"
	slide4.style.display = "none"
	slide5.style.display = "block"
	icon2.style.border = "2px solid #53b778"
	icon2.style.background = "white"
	icon3.style.border = "2px solid #53b778"
	icon3.style.background = "white"
	icon4.style.border = "2px solid #53b778"
	icon4.style.background = "white"
	icon5.style.border = "2px solid #53b778"
	icon5.style.background = "white"
}