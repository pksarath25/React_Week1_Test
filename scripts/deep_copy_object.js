console.log("");
console.log("====== Start Deep copy object =====");
let object = { 
    a: 1,
    b: 2,
}  
let objectCopy = JSON.parse(JSON.stringify(object));  
object.b = 20;
console.log(object, objectCopy); 
console.log("====== End Shallow copy object =====");