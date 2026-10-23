// for of

// ["", "", ""]
// [{}, {}, {}]

//A for...of loop allows you to access each value of an iterable one by one without manually managing an index.
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "hello world "
for(const i of greetings){
    console.log(i)
}

// Maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")
console.log(map)

for(const key of map){
    console.log(key)
}
//output
// [ 'IN', 'India' ]
// [ 'USA', 'United State of America' ]
// [ 'FR', 'France' ]

for(const [key, value] of map){
    console.log(key, ':-', value); //destructuring
}
//output
// IN :- India
// USA :- United State of America
// FR :- France


// this can't be iterateable
const myObject = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}
for(const [key, value] of myObject){
    console.log(key, ':-', value)
}