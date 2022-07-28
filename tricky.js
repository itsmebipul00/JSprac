// var let const

// let and const are block scoped
// var is global scoped

/********************/
/*****Exmaple 1 *****/
/*******************/
// {
// 	const a = 5
// 	console.log(a) //5
// }

// {
// 	var b = 4
// }

// console.log(a) // Uncaught reference Error
// console.log(b) // nothing no output after Error

/************************************************** */

// /********************/
// /*****Exmaple 2 *****/
// /*******************/
// {
// 	const a = 5
// 	console.log(a) //5
// }

// {
// 	var b = 4
// }

// console.log(b) // 4
// console.log(a) // Uncaught reference Error

/************************************************** */

/********************/
/*****Exmaple 3 *****/
/*******************/

// for (var i = 0; i < 3; i++) {
// 	setTimeout(() => console.log(i), 1) //3 3 3
// }

// for (let i = 0; i < 3; i++) {
// 	setTimeout(() => console.log(i), 1) // 0 1 2
// }

/************************************************** */

/********************/
/*****Exmaple 3 *****/
/*******************/

// for (var i = 0; i < 3; i++) {
// 	setTimeout(() => console.log(i), 1) //3 3 3
// }

// for (let i = 0; i < 3; i++) {
// 	setTimeout(() => console.log(i), 1) // 0 1 2
// }

/************************************************** */
// we can redeclare var variables as many times
// but we cant do that with let or const

// we can declare var, let without initializing a value, we cant do that with const

// we cant shadow let or const variable by var variable

// js execution context
// creation phase
// 1. it creates a global or execution object
// 2. sets up a memory heap for storing functions or variable references
// 3. initilizes these variables to undefined and stores the entire function in the window object
// 4

//execution phase

// executes line by line
// assigns values to variable
// executes function calls
// for every new function created JS creates a new execution context all together

// we cant
// let a = 5
// const b = 6
// {
// 	var a = 5
// 	var b = 6
// 	console.log(b)
// 	console.log(a)
// }
// console.log(a)

// const shape = {
// 	radius: 10,
// 	diameter() {
// 		return this.radius * 2
// 	},
// 	perimeter: () => {
// 		console.log(this)
// 		return 2 * Math.PI * this.radius
// 	},
// 	// perimeter() {
// 	// 	console.log(this)
// 	// 	return 2 * this.radius
// 	// },
// }

// console.log(shape.diameter())
// console.log(shape.perimeter())

// const bird = {
// 	size: 'small',
// }

// const mouse = {
// 	name: 'Mickey',
// 	small: true,
// }
// console.log([bird['size']])
// // console.log(mouse.bird.size)
// console.log(mouse[bird.size])
// console.log(mouse[bird['size']])
// console.log(mouse.small)
// console.log(mouse['small'])

// function bark() {
// 	console.log('Woof!')
// }

// bark.animal = 'dog'
// console.log(bark.animal)

// function Person(firstName, lastName) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// }

// const member = new Person('Lydia', 'Hallie')

// Person.getLastName = function () {
// 	return `${this.firstName} ${this.lastName}`
// }

// Person.prototype.getFullName = function () {
// 	return `${this.firstName} ${this.lastName}`
// }

// console.log(this)
// console.log(Person.getLastName())
// console.log(member.getFullName())
// console.log(member.getLastName())

// function Person(firstName, lastName) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// }

// // const lydia = new Person('Lydia', 'Hallie')
// // const sarah = Person('Sarah', 'Smith')

// console.log(lydia)
// // console.log(sarah)

// function getPersonInfo(one, two, three) {
// 	console.log(one)
// 	console.log(two)
// 	console.log(three)
// }

// const person = 'Lydia'
// const age = 21

// getPersonInfo`${person} is ${age} years old`

// function getAge(...args) {
// 	console.log(args)
// }

// getAge(21)

// const a = {}
// const b = { key: 'b' }
// const c = { key: 'c' }

// a[b] = 123
// a[c] = 456

// console.log(a[{ key: 'b' }])
// console.log(a[{ key: 'c' }])
// console.log(a[b])

// function fun() {
// 	const a = [
// 		[0, 1],
// 		[2, 3],
// 	].reduce(
// 		(acc, cur) => {
// 			console.log(acc)
// 			console.log(cur)
// 			return acc.concat(cur)
// 		},
// 		[1, 2]
// 	)
// 	return a
// }

// console.log(fun())

// let person = { name: 'Lydia' }
// const members = [person]
// person = null

// console.log(members)
// console.log(person)

// ;(() => {
// 	let x = (y = 10)
// })()

// console.log(typeof x)
// console.log(typeof y)

// index.js
// import myCounter from './counter'

// myCounter += 1

// console.log(myCounter)
// const name = 'Lydia'
// age = 21

// console.log(delete name)
// console.log(delete age)

// const person = { name: 'Lydia' }

// Object.defineProperty(person, 'age', { value: 21 })

// console.log(person)
// console.log(Object.keys(person))

/////call bind apply//
// const animals = [
// 	{ species: 'Lion', name: 'King' },
// 	{ species: 'Whale', name: 'Queen' },
// ]

// //call printanimals such that it prints all the animals in the array

// function printAllAnimals(i) {
// 	this.print = function () {
// 		console.log(this.species, this.name)
// 	}
// 	this.print()
// }

// for (let i = 0; i < animals.length; i++) {
// 	printAllAnimals.call(animals[i], i)
// }

//concat array whithout creating another variable
// const array = [1, 2, 3]
// const array2 = [1, 2, 3, 4, 5]

// array.push.apply(array, array2)

// console.log(Math.max.apply(null, array2))

// function f() {
// 	console.log(this.name)
// }

// f = f.bind({ name: 'Bipul' }).bind({ name: 'Tunav' })

// f()

// function checkPassword(success, failed) {
// 	let password = prompt('Password ?')
// 	if (password === 'Bipul') success()
// 	else failed()
// }

// let user = {
// 	name: 'Bipul Sharma',

// 	loginSuccess() {
// 		console.log(`${this.name}  logg in`)
// 	},

// 	failedLoggedIn() {
// 		console.log(this.name)
// 		console.log(`${this.name} failed to logg in`)
// 	},
// }

// checkPassword(
// 	user.loginSuccess.bind(user),
// 	user.failedLoggedIn.bind(user)
// )

// function checkPassword(success, failure) {
// 	let password = prompt('Password ?')
// 	if (password === 'Bipul') success()
// 	else failure()
// }

// let user = {
// 	name: 'Bipul Sharma',

// 	loginSuccess(result) {
// 		console.log(
// 			this.name + (result ? 'Login success' : 'Login failed')
// 		)
// 	},
// }

// checkPassword(
// 	user.loginSuccess.bind(user, true),
// 	user.loginSuccess.bind(user, false)
// )

// let user = {
// 	name: 'Bipul Sharma',

// 	loginSuccess() {
// 		console.log(`${this.name} logg in`)
// 	},

// 	failedLoggedIn() {
// 		console.log(`${this.name} failed to logg in`)
// 	},
// }

// checkPassword(
// 	user.loginSuccess.bind(user),
// 	user.failedLoggedIn.bind(user)
// )
// checkPassword(user)

// const age = 40

// var person = {
// 	name: 'Bipul',
// 	getArow: () => {
// 		console.log(this.age)
// 	},
// 	getAge: function () {
// 		console.log(this.age)
// 	},
// }

// var person2 = { age: 24 }

// person.getArow.call(person2)
// person.getAge.call(person2)

// const xArray = [1, 2, 3, 4, 5]
// const yArray = xArray
// yArray.push(10)
// console.log(xArray === yArray)
// const zArray = Object.assign([], xArray)
// console.log(zArray === xArray)
// zArray.push([44])
// aArray = [...zArray]
// console.log(aArray === zArray)
// aArray[6].push(66)
//nested structural data types still share a reference when you use a shallow copy
// console.log(aArray)
// console.log(zArray)
// console.log(aArray === zArray)
// console.log(zArray === xArray)
// console.log(xArray === yArray)

// Array.from, slice shallow copy
// Object.freeze creates a shallow frezze

// console.log(scoreObj === a)
// console.log(deepClone(scoreObj))

// const person = new User('BipulS')

// function User(username) {
// 	;(this.name = username),
// 		(this.talk = function () {
// 			console.log(`${this.name} is talking`)
// 		})
// 	setTimeout(
// 		function () {
// 			console.log(this)
// 		}.bind(this),
// 		100
// 	)
// 	setTimeout(() => console.log(this), 100)
// }

// person.talk()

// const person = {
// 	name: 'Bipul',
// 	talk: function () {
// 		return this
// 	},
// 	walk() {
// 		return this
// 	},
// 	arrow: () => this.name,
// 	bipul: () => console.log(`My name is ${this.name}`),
// 	arrowThis: this,
// 	timer() {
// 		setTimeout(() => this.name, 100)
// 	},
// 	timer2() {
// 		setTimeout(() => console.log(this.name), 100) //Bipul
// 	},
// 	timer3: function () {
// 		setTimeout(() => this.name, 100) //undefined
// 	},
// 	timer4: function () {
// 		setTimeout(
// 			function () {
// 				console.log(this.name)
// 			}.bind(this),
// 			100
// 		)
// 	},
// }

// console.log(person.talk())
// console.log(person.walk())
// console.log(person.arrow())
// console.log(person.bipul())
// console.log(person.arrowThis)
// console.log(person.timer)
// console.log(person.timer2())
// console.log(person.timer3())
// console.log(person.timer4())

// Since ST is async it doesnt pause the execution of other funs in funs stack

// setTimeout(() => {console.log("this is the first message")}, 5000);
// setTimeout(() => {console.log("this is the second message")}, 3000);
// setTimeout(() => {console.log("this is the third message")}, 1000);

// function x() {
// 	// i is block scoped so the arow fun forms a clouse with new var
// 	// let creates a variable declaration for each loop which is block level declaration.
// 	for (var i = 1; i <= 5; i++) {
// 		setTimeout(function () {
// 			console.log(i)
// 		}, i * 1000)
// 	}
// }
// x()

// var defines variable globally, or locally to an entire function regardless of block scope.

// // Examples:

//   function x(){
//   for(var i = 1; i<=5; i++){
//     setTimeout((() => console.log(i)), i*1000)
//   }
// }

// function x() {
// 	for (var i = 1; i <= 5; i++) {
// 		function inside(i) {
// 			setTimeout(() => console.log(i), i * 1000)
// 		}
// 		inside(i)
// 	}
// }
// x()

// function x() {
// 	let delay = 0
// 	for (var i = 1; i <= 5; i++) {
// 		function inside(i) {
// 			delay = delay + i * 1000
// 			setTimeout(() => console.log(i), delay)
// 		}
// 		inside(i)
// 	}
// }
// x()

// function x() {
// 	for (var i = 1; i < 5; i++) {
// 		;(i => setTimeout(() => console.log(i), i * 1000))(i)
// 		// inside
// 	}
// }
// x()
// NESTED TIMEOUTS

//nested touts are more flexible then setIntervals

// This way the next call may be scheduled differently,
// depending on the results of the current one.

// setTimeout(function tick() {
// 	console.log('!')
// 	setTimeout(tick, 2000) // (*)
// }, 2000)

//O/P: AFTER EVERY 2s !

// psedudo code for scheduled diffrently
// let delay = 5000;

// let timerId = setTimeout(function request() {
// //   ...send request...

//   if (request failed due to server overload) {
//     // increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

// Output:

// this is the third message
// this is the second message
// this is the first message

// const myArray = ['zero', 'one', 'two']

// myArray.myMethod = function (sProperty) {
// 	console.log(sProperty, arguments)
// 	console.log(arguments.length > 0 ? this[sProperty] : this)
// 	console.log(this)
// }

// myArray.myMethod
// myArray.myMethod() //returns this i.e myArray
// myArray.myMethod(1); //gives one i.e this[1] when arguments.length > 0

// Code executed by setTimeout() is called from an execution context separate from the function from which setTimeout was called.
// since fun is not initialized, this inside settimeout is not binded to myArray,
// instead of stroring the function and setting this to it and then calling it from the call stack, //
//below it is just calling the function directly

// setTimeout(myArray.myMethod, 1.0 * 1000) // prints "[object Window]" after 1 second
// setTimeout(myArray.myMethod, 1.5 * 1000, '1') // prints "undefined" after 1.5 seconds

// setTimeout(myArray.myMethod.bind(myArray), 1000)

// // SOLUTION:
// setTimeout(function(){myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
// setTimeout(function(){myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds

// setTimeout(() => {myArray.myMethod()}, 2.0*1000); // prints "zero,one,two" after 2 seconds
// setTimeout(() => {myArray.myMethod('1')}, 2.5*1000); // prints "one" after 2.5 seconds

// const myArray2 = ['zero', 'one', 'two'];
// const myBoundMethod = (function (sProperty) {
//     console.log(arguments.length > 0 ? this[sProperty] : this);
// }).bind(myArray2);

// myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
// myBoundMethod(1); // prints "one"
// setTimeout(myBoundMethod, 1.0*1000); // still prints "zero,one,two" after 1 second because of the binding
// setTimeout(myBoundMethod, 1.5*1000, "1"); // prints "one" after 1.5 seconds

// Exrcises:

// function printNumbers(from, to) {
// 	let current = from

// 	let timerId = setInterval(function () {
// 		if (current == to) {
// 			clearInterval(timerId)
// 		}
// 		console.log(current)
// 		current++
// 	}, 1000)
// }

// // usage:
// printNumbers(5, 10)

// function printNumbers(from, to) {
// 	let current = from

// 	setTimeout(function go() {
// 		// console.log(current);
// 		if (current < to) {
// 			setTimeout(go, 1000)
// 		}
// 		return current++
// 	}, 1000)
// }

// function printNumbers(from, to) {
// 	let current = from
// 	setTimeout(function go() {
// 		if (current < to) {
// 			setTimeout(go, 1000)
// 		}
// 		console.log(current)
// 		return current++
// 	}, 1000)
// }

// // usage:
// printNumbers(5, 10)
// console.log(printNumbers(5, 10))

// function printNumbers(from, to) {
//   let current = from;

//   function go() {
//     // console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//     return current

//   }
//   go();
//   let timerId = setInterval(go, 1000);
// }

// printNumbers(5, 10);

// function printNumbers(start, end){

//   let current = start

//   setTimeout(function go(){
//     console.log(current)
//     if(current < go){
//       setTimeout(go, 1000)
//     }
//     return current++
//   }, 1000)

// }

// printNumbers(1, 5)

//running functions after certain time

// ;[func1, func2, func3].map(function (fun, index) {
// 	setTimeout(fun, 1000 + index * 1000)
// })

// const curryUnaryFunction = a => b => c => {
// 	console.log(a, b, c)
// 	return a + b - c
// }
// console.log(curryUnaryFunction(1)(3)(3))

// const person = {
// 	firstName: 'Mary',
// 	lastName: 'Doe',
// 	display: function () {
// 		console.log(this.firstName + ' ' + this.lastName)
// 	},
// }

// setTimeout(person.display.bind(person), 3000)

// function area({ length = 10, width = 20 }) {
// 	console.log(arguments)
// 	console.log(length * width)
// }

// area()

// const props = [
// 	{ id: 1, name: 'John' },
// 	{ id: 2, name: 'Jack' },
// 	{ id: 3, name: 'Tom' },
// ]

// const [, , { name }] = props
// console.log(name)
// function add(item, items = []) {
//     items.push(item);
//     return items;
//   }

//   console.log(add("Orange"));
//   console.log(add("Apple"));

// const getName1 = () => {
// 	console.log(this.name)
// }

// let personObj = {
// 	name: 'Joy',
// 	print: getName1,
// }

// personObj.print()

// ;(function () {
// 	var array = new Array('a', 'b', 'c', 'd', 'e')
// 	array[10] = 'f'
// 	delete array[10]
// 	console.log(array[7])
// })()

// const printNumbersArrow = (first, second, first) => {
// 	console.log(first, second, first)
// }
// printNumbersArrow(1, 2, 3)

// ;(function () {
// 	var objA = Object.create({
// 		foo: 'foo',
// 	})
// 	var objB = Object.create(objA)
// 	console.log(objA)
// 	console.log(objB)
// 	console.log(objA.toString() == objB.toString())
// 	console.log(objA.toString() === objB.toString())
// })()

// const originalArray = [1, 2, 3, 4, 5]
// const newArray = originalArray.reverse()
// console.log(newArray)
// console.log(originalArray)

// console.log([[1], [2], [3], [4]].indexOf([3]))

// var obj = {
// 	message: 'Hello',
// 	innerMessage: function () {
// 		;(function () {
// 			console.log(this.message)
// 		})()
// 	},
// }
// obj.innerMessage()

// console.log([{ prop1: 'value of array A!!' }, 3, 4, 5].slice())

// ;(function () {
// 	console.log(typeof displayFunc)
// 	var displayFunc = function () {
// 		console.log('Hi I am inside displayFunc')
// 	}
// })()

// const employee = {
// 	name: 'Mayank',
// 	address: {
// 		street: 'Bellandur',
// 		city: 'Bangalore',
// 	},
// }

// Object.freeze(employee)
// employee.name = 'Noida'
// console.log(employee)
