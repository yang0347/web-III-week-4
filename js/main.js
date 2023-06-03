console.log("JS file added!")

const region = "China"

if(regin = "Canada"){
    console.log("You are seeing Canadian version of this site")
}

let price = 20
const shippingFee = 15
let cartTotal

if(price >= 50){
    cartTotal = price
} else{
    cartTotal = price + shippingFee
}

//console.log(cartTotal)

document.getElementById("cart1").innerHTML += "Your cart total is " + cartTotal

//reassigning the price

price = 105
const discount = 0.15

if(price >= 100){
    cartTotal = price - (price * discount)
} else if(price >= 50){
    cartTotal = price
} else{
    cartTotal = price + shippingFee
}
console.log(cartTotal)


document.getElementById("cart2").innerHTML += "Your cart total is " + cartTotal

//switch (suite for create the quize)

let planet = "Earth"
let message

switch(planet){
    case "Earth":
        message = "Welcome to the third planet!"
        break
    case "Mars":
        message = "Welcome to the red planet!"
        break
    case "Jupiter":
        message = "Welcome to the largest planet!"
        break
    default:
        message = 'You are on ${planet}. we do not service ${planet} yet!'

}
console.log(message)

document.getElementById("planet").innerHTML += message


//switch EX 2 with stacking cases 
let answer = "b"

switch(answer) {
    case "a":
    case "b":
    case "d":
        document.getElementById("quiz").innerHTML += "Incorrect answer, please try again"
        break
    case "c":
        console.log("Perfect, you got it right!")
}

 
/* Function */

function myName (){
    return "Vicky"
}

let firstName = myName()

document.querySelector(".container h1").innerHTML += " " + firstName


function changeBg(bgColor){
    document.querySelector("body").style.backgroundColor = bgColor
    //to test this function go to the console and type changeBg("cyan")
}

/* one more example for Function
1. change the size to the given text
*/

function textResize(newFontSize){
    document.querySelector('html').style.fontSize = newFontSize
}

//Calculator 
function calculator(a, b, operator){
    let result
    switch(operator){
        case "add":
            result = a + b
            break
        case "sub":
            result = a - b
            break
        case "multi":
            result = a * b
            break
        case "div":
            result = a / b
            break
        default:
            result = "I do not understand!!!"

    }
    return result
}

console.log(calculator(34, 56, "multi"))
console.log(calculator(908, 57, "sub"))
console.log(calculator(34, 56, "multiply"))