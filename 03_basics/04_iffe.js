// Immediately Invoked Function Expressions (IIFE)

// An IIFE is a function that executes immediately after it is defined, without needing to be called separately.
// interview ans. Sometimes, global scope variables can cause problems. To avoid global scope pollution, we use IIFEs (Immediately Invoked Function Expressions). 

(function one(){
    // named IIFE
    console.log("Hie")
})(); // The semicolon (;) is important when an IIFE is written immediately after another statement or expression because it 
// prevents JavaScript from accidentally treating the IIFE as part of the previous expression.

((name) => {
    // unnamed IIFE
    console.log(`DB connect two ${name}`)
})('jai');