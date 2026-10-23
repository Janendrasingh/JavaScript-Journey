// The forEach() method in JavaScript is a built-in array function used to loop through and execute a 
// callback function once for every element in an array. Unlike a traditional for loop, you do not need to manually 
// manage counters or index pointers. It is ideal for executing side effects, such as logging data, 
// modifying external variables, or updating DOM elements

const coding = ["js", "cpp",  "python", "java"]
coding.forEach(function (item){
    console.log(item);
})

//variation 2
coding.forEach((value) => {
    console.log(value);
})

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})
// output
// js 0 [ 'js', 'cpp', 'python', 'java' ]
// cpp 1 [ 'js', 'cpp', 'python', 'java' ]
// python 2 [ 'js', 'cpp', 'python', 'java' ]
// java 3 [ 'js', 'cpp', 'python', 'java' ]

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName)
})
// output =>
// javaScript
// java
// Python