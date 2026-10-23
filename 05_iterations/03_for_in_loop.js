// he for...in loop is used to iterate over the keys (or property names) of an object. 
// It loops through all enumerable properties of the object, allowing you to access the property names dynamically

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "cpp" ]
for(const key in programming){
    console.log(programming[key], key)
}