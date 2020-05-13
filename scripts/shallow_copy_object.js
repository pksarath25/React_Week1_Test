console.log("");
console.log("====== Start Shallow copy object =====");
let obj = {
    a: 1,
    b: 2,
};
let objCopy = Object.assign({}, obj);
console.log(obj,objCopy);
console.log("====== End Shallow copy object =====");