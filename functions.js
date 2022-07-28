// Polyfills for promise.all

// Promise.myAll = function (promises) {
// 	let completedPromises = 0
// 	let results = []
// 	return new Promise((resolve, reject) => {
// 		promises.forEach((promise, idx) => {
// 			Promise.resolve(promise)
// 				.then(value => {
// 					results[idx] = value
// 					completedPromises++
// 					if (completedPromises === promises.length) {
// 						resolve(results)
// 					}
// 				})
// 				.catch(err => reject(err))
// 		})
// 	})
// }

// const promise1 = Promise.resolve(3)
// const promise2 = 42
// const promise3 = new Promise((resolve, reject) => {
// 	setTimeout(resolve, 100, 'foo')
// })

// Promise.myAll([promise1, promise2, promise3]).then(values => {
// 	console.log(values)
// })

// Promise.myAll([promise1, promise2, Promise.reject('Fsdf')])
// 	.then(values => {
// 		console.log(values)
// 	})
// 	.catch(err => console.log(err))

// Promise.myAllSetteled = function (promises) {
// 	const STATE = {
// 		FULLFILLED: 'fullfilled',
// 		PENDING: 'pending',
// 		REJECTED: 'rejeted',
// 	}

// 	let countOfPromises = 0
// 	let results = []
// 	return new Promise((resolve, reject) => {
// 		promises.forEach((promise, idx) => {
// 			Promise.resolve(promise)
// 				.then(value => {
// 					results[idx] = { status: STATE.FULLFILLED, value }
// 				})
// 				.catch(reason => {
// 					results[idx] = { status: STATE.REJECTED, reason }
// 				})
// 				.finally(() => {
// 					countOfPromises++
// 					if (countOfPromises === promises.length) {
// 						resolve(results)
// 					}
// 				})
// 		})
// 	})
// }

// Promise.myAllSetteled([
// 	Promise.reject('Fsdf'),
// 	Promise.resolve(4),
// 	'afs',
// ]).then(values => {
// 	console.log(values)
// })

// Promise.myRace = function (promises) {
// 	return new Promise((resolve, reject) => {
// 		promises.forEach(value => {
// 			return Promise.resolve(value).then(resolve, reject)
// 		})
// 	})
// }

// Promise.myRace(['Fsfs', Promise.reject('FG'), 'Fsfsdf'])
// 	.then(values => {
// 		console.log(values)
// 	})
// 	.catch(error => console.log(error))

// Promise.myAny = function (promises) {
// 	let errors = []
// 	let noOfErrors = 0

// 	return new Promise((resolve, reject) => {
// 		promises.forEach((promise, idx) => {
// 			Promise.resolve(promise)
// 				.then(value => {
// 					resolve(value)
// 				})
// 				.catch(error => {
// 					noOfErrors++
// 					errors[idx] = error
// 					if (noOfErrors === promises.length) {
// 						reject(
// 							new AggregateError(errors, 'All promises are rejected')
// 						)
// 					}
// 				})
// 		})
// 	})
// }

// Promise.myAny([
// 	Promise.reject('FG'),
// 	Promise.reject('FG'),
// 	Promise.reject('FG'),
// ])
// 	.then(values => {
// 		console.log(values)
// 	})
// 	.catch(error => console.log(error))

// const car1 = {
// 	color: 'Red',
// 	company: 'Ferrari',
// }

// function purchaseCar(currency, price) {
// 	console.log(`${this.color} ${currency} ${price}`)
// }

// Function.prototype.myCall = function (context = {}, ...args) {
// 	if (typeof this !== 'function') {
// 		throw new Error(this + 'Is not callable')
// 	}

// 	context.fn = this
// 	context.fn(...args)
// }

// Function.prototype.myApply = function (context = {}, args = []) {
// 	if (typeof this !== 'function') {
// 		throw new Error(this + 'Is not callable')
// 	}

// 	if (!Array.isArray(args)) {
// 		throw new TypeError('CreateListFromArrayLike is not an array')
// 	}

// 	context.fn = this
// 	context.fn(...args)
// }

// Function.prototype.myBind = function (context = {}, ...args) {
// 	if (typeof this !== 'function') {
// 		throw new Error(this + 'cannot be bound as it is not callable')
// 	}

// 	context.fn = this
// 	return function (...newArgs) {
// 		return context.fn(...args, ...newArgs)
// 	}
// }
// const newFn = purchaseCar.myBind(car1, 'fsdf', 'fsd')
// newFn()
// purchaseCar.myApply(car1, ['FSF', 'SFdsfdsf'])
// purchaseCar.myCall(car1, 'FSF', 'SFdsfdsf')

// Array.prototype.myFlat = function () {
// 	// if (typeof input[Symbol.iterator] !== 'function') {
// 	// 	throw new Error(this + 'is not iterable')
// 	// }
// 	if (!Array.isArray(this)) {
// 		throw new Error('Not an array')
// 	}

// 	let results = []

// 	function getFlatArray(args) {
// 		args.forEach(item => {
// 			if (Array.isArray(item)) {
// 				getFlatArray(item)
// 			} else {
// 				results.push(item)
// 			}
// 		})
// 	}

// 	getFlatArray(this)

// 	return results
// }

// const arr1 = [1, [2, [4, 5]]]

// Array.prototype.flatten = function () {
// 	let faltArr = []
// 	for (let i = 0; i < this.length; i++) {
// 		const element = this[i]
// 		if (Array.isArray(element)) {
// 			faltArr = faltArr.concat(this.flatten.call(element))
// 		} else {
// 			faltArr.push(element)
// 		}
// 	}
// 	return faltArr
// }

// console.log(arr1.flatten(1))

// const obj = {
// 	name: 'Bipul',
// 	age: 21,
// 	address: { flatNo: 301, city: 'Banglore' },
// }

// let obj = {
// 	a: {
// 		b: {
// 			c: 1,
// 		},
// 	},
// }

// //todolater
// function flattenObject(object, keyToPlace) {
// 	let toReturnObject = {}
// 	for (let key in object) {
// 		if (keyToPlace === '') {
// 			keyToPlace = key
// 		}
// 		if (typeof object[key] === 'object') {
// 			let keyToSend
// 			if (keyToPlace !== undefined && keyToPlace.length === 1) {
// 				keyToSend = keyToPlace + '.'
// 			} else {
// 				keyToSend = keyToPlace + key + '.'
// 			}
// 			let newObject = flattenObject(object[key], keyToSend)
// 			toReturnObject = { ...toReturnObject, ...newObject }
// 		} else {
// 			if (keyToPlace.length === 1) {
// 				toReturnObject[keyToPlace] = object[key]
// 			} else {
// 				toReturnObject[keyToPlace + key] = object[key]
// 			}
// 		}
// 	}
// 	return toReturnObject
// }

// function flattenObj(obj) {
// 	let newObj = {}
// 	const getFlatObj = obj => {
// 		Object.keys(obj).forEach(key => {
// 			if (typeof obj[key] === 'object') {
// 				getFlatObj(obj[key])
// 			} else {
// 				newObj[key] = obj[key]
// 			}
// 		})
// 	}
// 	getFlatObj(obj)

// 	return newObj
// }

// flattenObj(obj)
// console.log(flattenObj(obj))
// console.log(flattenObject(obj))

// const memoize = fn => {
// 	const cache = []
// 	return function (...args) {
// 		console.log(cache)
// 		console.log(...args)
// 		if (cache[args]) {
// 			console.log(cache)
// 			return cache[args]
// 		}

// 		result = fn(...args)
// 		cache[args] = result
// 		return result
// 	}
// }

// const myMomoize = fn => {
// 	const cache = []
// 	return function () {
// 		const args = JSON.stringify(arguments)
// 		if (cache[args]) {
// 			return cache[args]
// 		}

// 		const eval = fn.apply(this, arguments)
// 		cache[args] = eval
// 		return eval
// 	}
// }

// function factorial(n) {
// 	if (n === 0 || n === 1) {
// 		return 1
// 	}
// 	return factorial(n - 1) * n
// }
// const memoizedFactorial = memoize(factorial)
// console.log(memoizedFactorial(10)) // slow
// console.log(memoizedFactorial(10)) // faster

// const sleep = duration => {
// 	return new Promise(resolve => {
// 		setTimeout(resolve, duration)
// 	})
// }

// sleep(1500).then(() => console.log('first'))

// const arr = [50, 60, 70]

// Array.prototype.myForEach = function (cb) {
// 	console.log(this)
// 	console.log(cb)
// 	for (let i = 0; i < this.length; i++) {
// 		cb(this[i], i, this)
// 	}
// }

// arr.myForEach(ele => console.log(ele + 1))

// Array.prototype.myMap = function (cb) {
// 	// console.log(cb, this)
// 	let temp = []
// 	for (let i = 0; i < this.length; i++) {
// 		// console.log(temp[i])
// 		// if(this.indexOf(this[i] > -1)){
// 		temp[i] = cb(this[i], i, this)
// 		//(ele) => ele+1
// 		// }
// 		console.log(temp)
// 	}
// 	return temp
// }

// const newArr = arr.myMap(ele => ele + 1)

// const arr3 = [2, , 3, 4, 5, 6, 7, 8]

// Array.prototype.myFilter = function (cb) {
// 	// console.log(cb, this)
// 	//num => num > 5
// 	let temp = []
// 	for (let i = 0; i < this.length; i++) {
// 		if (cb(this[i], i, this)) {
// 			// for(let i= 0; i< this.length; i++){
// 			temp.push(this[i])
// 			// }
// 		}
// 	}
// 	return temp
// }

// const newArr3 = arr3.myFilter(num => num > 5)

// console.log(newArr3)

// Array.prototype.myReduce = function(cb, initialVal) {
//   //(acc, val) => val+acc
//   let acc = initialVal
//   for(let i = 0; i<this.length; i++){
//     if(acc){
//       acc = cb(acc, this[i], i, this)
//     }else{
//       acc = this[i]
//     }
//   }
//   return acc
// }

// myArr4 = [3, 2, 5, 7]

// myArr = [2, 4, 6]

//   // const summyArr4 = myArr4.myReduce((acc, val) => val+acc, 0)

// Array.prototype.MySome = function (cb) {
// 	for (let i = 0; i < this.length; i++) {
// 		if (cb(this[i], i, this)) {
// 			return true
// 		}
// 		return false
// 	}
// }

// console.log(myArr4.MySome(item => item % 2 === 0))
// Array.prototype.MyEvery = function (cb) {
// 	for (let i = 0; i < this.length; i++) {
// 		if (!cb(this[i], i, this)) {
// 			return false
// 		}
// 		return true
// 	}
// }
// console.log(myArr.MyEvery(item => item % 2 === 0))

// Array.prototype.arrayFlat = function (depth = 1) {
// 	let arr = this
// 	let newArr = []
// 	function flat(arr, depth) {
// 		for (let i = 0; i < arr.length; i++) {
// 			const ele = arr[i]
// 			if (Array.isArray(ele) && depth > 0) {
// 				flat(ele, depth - 1)
// 			} else {
// 				newArr.push(ele)
// 			}
// 		}
// 	}
// 	flat(arr, depth)
// 	return newArr
// }
// console.log([1, 2, [3, [4, 5]]].arrayFlat(2))

// const scoreObj = {
// 	first: 44,
// 	second: 12,
// 	third: { a: 1, b: 2 },
// }

// Object.freeze(scoreObj)
// scoreObj.third.a = 8
// console.log(scoreObj) //mutated

// const deepClone = obj => {
// 	if (typeof obj !== 'object' || obj === null) return obj

// 	const newObj = Array.isArray(obj) ? [] : {}

// 	for (let ele in obj) {
// 		console.log(ele)
// 		const val = obj[ele]
// 		console.log(val)
// 		newObj[ele] = deepClone(val)
// 	}
// 	return newObj
// }

// const a = deepClone(scoreObj)
