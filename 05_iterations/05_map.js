const coding = ["js", "ruby", "java","pythons"]
const values = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(values) // undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]
const neNumbs = myNums.filter( (num) => num>4) //[ 5, 6, 7, 8, 9, 10 ]
console.log(neNumbs);

const newNumbs = myNums.filter( (num) => {
    num>4
}) //[]
console.log(newNumbs); // because we are not using return keyword in it

const Nums = []
myNums.forEach((nums) => {
    if(nums>4){
        myNums.push(nums)
    }
})
console.log(myNums)


// chaining refers to the practice of executing multiple operations sequentially in a single line of code. 
// Depending on the context, "chaining" can mean Method Chaining (linking function calls), 
// Optional Chaining (safely accessing nested properties), or Promise Chaining (handling asynchronous operations).
const numbers = myNums
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(numbers)
