// const arr=[1,2,3]
// const newArr=[4,5,6,arr[0],arr[1],arr[2]]
// console.log(newArr)  //[4,5,6,1,2,3]

// const newArr=[5,6,...arr]
// console.log(newArr)

// const arr =[1,2,3,4,5]

// const first=arr[0]
// const rest = arr.slice(2)

// console.log(first)
// console.log(rest)

const arr=[1,2,3,4,5,6,7,8,9,10]
const [a,b,...rest]=arr
console.log(a)
console.log(b)
console.log(rest)
