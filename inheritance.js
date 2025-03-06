class Users {
        constructor(username, age) {
            this.username = username
            this.age = age
        }
    
        printMe() {
            console.log(`hello ${this.username}`)
        }

        static accountId(){
            return 123
        }
    }

class User extends Users{
    constructor(username, age, id){
        super()
        this.age = age
        this.id = id
    }

    printMe() {
        console.log(`hello my name is ${this.username} and i am ${this.age} old`)
    }
    
    logId() {
        console.log(`hello my name is ${this.id}`)
    }
}

const userOne = new User("ajay", 20, 1)
userOne.printMe()

userOne.logId()


const abc = new Users("raj", 20)
// abc.accountId()

console.log(Users.accountId())