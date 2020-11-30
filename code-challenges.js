// ASSESSMENT 4: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in an array. Each time the function is run, 
//remove the first item from the array and shuffle the remaining content. If the array is empty, return "The array is empty."

var collections = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example1 (can be a different order): ["yellow", "blue", "pink", "green"]
// Expected output example2 (can be a different order): ["blue", "green", "pink"]
// Expected output example3 (can be a different order): ["pink", "green"]

const shuffle = (arr) => {
    if(arr.length === 0){
        return "The array is empty"
    }else{
        arr.shift()
        arr.sort((a,b) => 0.5 - Math.random())
    }
    return arr
}

console.log(shuffle(collections))

//Fisher Yates 
const shuffleArray = (array) => {
    array.shift()
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        // console.log(j)
        const temp = array[i]
        // console.log(temp)
        array[i] = array[j]
        array[j] = temp
        // console.log(temp)
        // console.log(array)
    }
    return array
}

// console.log(shuffleArray(collections))



// --------------------2) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

const sumCube = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + (array[i] * array[i] * array[i])
    }
    return sum
}

// console.log(sumCube(cubeAndSum1))
// console.log(sumCube(cubeAndSum2))





// --------------------3) Create a function that takes an array of numbers and returns an array of the minimum and 
//maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]


// const minMax = (array) => {
//     let smallest = 0
//     let largest = 0
//     for (let i = 0; i < array.length; i++) {
//         if(array[i] < smallest){
//             smallest = array[i]
//             console.log(smallest)
//         }  
//         return smallest      
//     }
// }

const maxMin= (array) => {
    let newArray = []
    let length = array.length - 1
    array.sort(function(a, b) {return b - a})
    newArray.push(array[length],array[0])
    return newArray
}

// console.log(maxMin(nums1))
// console.log(maxMin(nums2))



// --------------------4) Create a function that takes in a string and returns a string with every other letter capitalized.

var testString1 = "albatross"
// Expected output: "aLbAtRoSs"
var testString2 = "jabberwocky"
// Expected output: "jAbBeRwOcKy"

const cap = (string) => {
    let arr = string.split("")
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 != 0){
            newArray.push(arr[i].toUpperCase())
        }else{
            newArray.push(arr[i])
        }       
    }
    return newArray.join("")
}

// console.log(cap(testString1))
// console.log(cap(testString2))





// --------------------5) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. 
//STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var arr1 = [3, 7, 10, 5, 4, 3, 3]
var arr2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
let arr3 = [3, 7, 10, 5, 4, 3, 3, 7, 8, 2, 3, 1, 5, 4]

// combine both arrays being passed down
//First time around in the filter method
//3 will be in position 0
//indexOf will always get the position of the first instance of the array
// then it will compare it to the re-iteration of it
// so the second instant of 3 happens at position 6
// however indexOf 3 is still 0 since indexOf gets the first position of the 3 occurence
// that is why indexOf 3 will not equal to the second instance of 3 which is at 6

const noDup = (arr1, arr2) => {
    let newArr = arr1.concat(arr2)
    // console.log(newArr)
    let finalArr = newArr.filter((value, index) => newArr.indexOf(value) === index)
    return finalArr
    }

// console.log(noDup(arr1, arr2))


