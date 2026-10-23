//The Array.prototype.reduce() method in JavaScript executes a user-supplied "reducer" callback function on each element 
// of an array in order, passing in the return value from the calculation on the preceding element. 
// It reduces an array down to a single output value (such as a number, object, string, or another array)

const myNums = [1,2,3]
const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 2)
console.log(myTotal);


const MyTotal = myNums.reduce((acc, curr) => acc+curr, 0)
console.log(myTotal)


const shoppingCart =[ 
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "ai course",
        price: 3999,
    },
    {
        itemName: "cpp course",
        price: 4999,
    },
]

const priceToPAy = shoppingCart.reduce((acc, item) => acc + item.price , 0)
console.log(priceToPAy)