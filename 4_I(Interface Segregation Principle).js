// Interface Segregation Principle

// class Animal {
//     constructor (name) {
//         this.name = name
//     }

//     walk() {
//         console.log(this.name + 'can walk')
//     }
//     swim() {
//         console.log(this.name + 'can swim')
//     }
//     fly() {
//         console.log(this.name + 'can fly')
//     }
// }

// class Dog extends Animal {
//     fly() {
//         return null
//     }
// }

// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }

// class Whale extends Animal {
//     walk() {
//         return null
//     }
//     fly() {
//         return null
//     }
// }

// const dog = new Dog('Rex')
// const eagle = new Eagle('Orel')
// const whale = new Whale('KIT')

// dog.walk()
// dog.swim()
// dog.fly()
// eagle.fly()
// eagle.walk()
// eagle.swim()
// whale.swim()
// whale.walk()
// whale.fly()

class Animal {
    constructor (name) {
        this.name = name
    }
}

const walker = {
    walk() {
        console.log(this.name + ' can walk')
    }
}

const flier = {
    fly() {
        console.log(this.name + ' can fly')
    }
}

const swimmer = {
    swim() {
        console.log(this.name + ' can swim')
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Rex')
const eagle = new Eagle('Orel')
const whale = new Whale('KIT')

dog.walk()
dog.swim()
// dog.fly()
eagle.fly()
eagle.walk()
// eagle.swim()
whale.swim()
// whale.walk()
// whale.fly()