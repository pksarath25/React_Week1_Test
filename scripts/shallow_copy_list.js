console.log("");
console.log("====== Start Shallow copy list =====");
numbers = [1, 2, 3];
numbersCopy = [...numbers];
numbersCopy.push(4);
console.log(numbers, numbersCopy);
console.log("====== End Shallow copy list =====");