//oops

/*
class House {
	constructor(size) {
		this.size = size
	}

	getSize() {
		return this.size
	}
}
let myHouse = new House('15sq')
console.log(myHouse.getSize())
*/

/*
class Rectangle {
	constructor() {
		this.width = 5
		this.height = 2
	}

	

	getArea() {
		return this.width * this.height
	}
}

const newRect = new Rectangle()

console.log(newRect.width)
console.log(newRect.height)
console.log(newRect.getArea())
*/

/***************Getter setter ***********************/

/*
class Rectangle {
	constructor(width, height) {
		this.width = width
		this.height = height
		this.noOfrequests = 0
	}

	get area() {
		this.noOfrequests++
		return this.height * this.width
	}

	set area(height) {
		this.height = height
		this.width = height
	}
}

const rect1 = new Rectangle(5, 6)

rect1.height = 5

console.log(rect1.area)
console.log(rect1.area)
console.log(rect1.area)

console.log(rect1.noOfrequests)
*/

/*
class Square {
	constructor(width, height) {
		this.width = width
		this.height = height
	}

	static equals(width, height) {
		return width === height
	}
}


console.log(Square.equals(5, 6))

*/

/***********Inheritence*****/
/*
class Person {
	constructor(name) {
		this.name = name
	}

	getname() {
		return `My name is ${this.name}`
	}
}

class Programmer extends Person {
	constructor(name, age) {
		super(name)
		this.age = age
	}

	code() {
		return `My name is ${this.name} and I am ${this.age} years old.`
	}
}

const person1 = new Person('Bipul')

const Programmer1 = new Programmer('Tunav', 31)

console.log(person1.getname())
console.log(Programmer1.code())
*/

/******Polymorphism*****/

// class Person {
// 	getName() {
// 		return `My name is Bipul`
// 	}
// }

// class Male extends Person {
// 	getName() {
// 		super.getName()
// 		return 'My name is Tunav'
// 	}
// }

// // const person1 = new Person()
// const person2 = new Male()
// // console.log(person1.getName())
// console.log(person2.getName())
