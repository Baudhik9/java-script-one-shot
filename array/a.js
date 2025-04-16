const myar = [1,2,3,4,5] //declaration of an array
//array can be resized even after declaration
//console.log(myar)

const myhero = ["baudhik","Madan"]
//console.log(myhero[1])
const newar = new Array(1,2,3,4)
//console.log(newar[2])
myar.push(6)
//console.log(myar)
myar.push(7)
//console.log(myar)
myar.pop()
//console.log(myar)

myar.unshift(9)//used to insert an element in the starting of the array
//console.log(myar)
myar.shift() // used to remove the first element of the array
//console.log(myar.includes(9))//answer the question of the lement presnt in array in form of true and false
//console.log(myar.indexOf(9)) gives index of the element if present else it gives -1 if not present

const newarr=myar.join()
// console.log(newarr)
// console.log(typeof newarr)

//slice,splice
//console.log("A ",myar)
const mynewar1 = myar.slice(1,3)
//console.log(mynewar1)

//console.log("B ",myar)
const mynewar2 = myar.splice(1,3)
// console.log("B ",myar)
// console.log(mynewar1)
//splice remove the range of the element from the array and give it as a result whereas the slice don't remove those elments of the array

const a=["my","name","is"]
const b=["baudhik","madan"]
const c= a.concat(b)
//console.log(c)
const d=[...a, ...b]
//console.log(d)


const e =[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real = e.flat(Infinity)//converts all inside array into a single array with infinite depth of array
3:41:25
console.log(real);
