const user = {
    username: "Janendra",
    loginCount: 8,
    signedIn: true,

    getuserDetails: function(){
        // console.log("Got user details");
        // console.log(`userName: ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
// console.log(user.getuserDetails());
// console.log(this)


// const promise1 = new Promise()
// const date = new Date() // where new keyword is a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = User('jai', 12, true)
// const userTwo = User("chaiOR", 11, false) // it will override the values 
// console.log(userOne);

const userOne = new User('jai', 12, true)
const userTwo = new User("chaiOR", 11, false) // fixed by constructor function
console.log(userOne);

