console.log("");
console.log("====== Start Deep copy list =====");
const numbers = [1, 2, 3];
numbersCopy =JSON.parse(JSON.stringify(numbers));
console.log(numbers, numbersCopy);
console.log("====== End Shallow copy list =====");