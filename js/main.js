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

