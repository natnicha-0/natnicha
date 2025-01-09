let name = prompt("กรุณาป้อนชื่อ")
while(name==""||name==null){
    name=prompt("กรุณาป้อนชื่อ")
}
alert("ชื่อของคุณ "+name)

stickElement = document.querySelectorAll("#stick1, #stick2, #stick3");
stickElement.forEach(element => {
    element.style.verticalAlign = "top";
});
element = document.querySelectorAll("h1.intro");
element[0].innerHTML = element[0].innerHTML.toUpperCase()
element[0].style.color = "red";