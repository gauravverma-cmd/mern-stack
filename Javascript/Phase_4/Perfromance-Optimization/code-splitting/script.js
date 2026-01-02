import balak from "./app.js"
console.log(balak)         // default export

import {name}from "./app.js"
console.log(name)   

import {age} from "./app.js" 
console.log(age)             // named export  


import { veryHeavy } from "./heavy.js"
console.log(veryHeavy)