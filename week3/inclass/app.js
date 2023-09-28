let firstSection = document.getElementById("sectionOne")
let firstImage = document.getElementById("imageOne")
let buttonChangeColor = document.getElementById("colorChangeBTN")
let buttonGenColor = document.getElementById("colorGenBTN")
let buttonimgChange = document.getElementById("imageChangeBTN")
let buttonAddText = document.getElementById("addTextBTN")

console.log(buttonChangeColor)

let changeColor = function(){
    firstSection.style.backgroundColor ="rgb(170,250,170)"
}

let generateColor = function(){
    let redComp = Math.random()*255
    let greenComp = Math.random()*255
    let blueComp = Math.random()*255
    firstSection.style.backgroundColor = "rgb("+redComp+","+greenComp+","+blueComp+")"
}

let changeImage = function(){
    firstImage.classList.toggle("image-2")
    console.log(firstImage.classList[0])
    if(firstImage.classList[0] == "image-2"){
        firstImage.src = "jc3.webp"
    }
    else{
        firstImage.src = "jc1.png"
    }
}

let addText = function(){
    let myParag = document.createElement("p")
    myParag.innerText="Hello, this is JELLYCAT!Hello, this is JELLYCAT!Hello, this is JELLYCAT!Hello, this is JELLYCAT!Hello, this is JELLYCAT!Hello, this is JELLYCAT!Hello, this is JELLYCAT!Hello, this is JELLYCAT!Hello, this is JELLYCAT!"
    myParag.style.fontWeight="bolder"
    firstSection.appendChild(myParag)
}

// Fat arrow function
// let changeColor = ()=>{
// }

firstSection.style.backgroundColor = "rgb(250,170,170)"

buttonChangeColor.addEventListener("click",changeColor)
buttonGenColor.addEventListener("click",generateColor)
buttonimgChange.addEventListener("click",changeImage)
buttonAddText.addEventListener("click",addText)