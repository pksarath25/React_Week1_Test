console.log("");
console.log("====== Start Workshop example =====");
console.log("hello World");
const hello = "hello World";
console.log(hello);
//hello = "Hello Suyati";
console.log(hello);

//console.log("====== Start - The let Keyword - Block Scope =====");
var b1 = 5;
if (true) {
    var b1 = 10;
    console.log(b1);
}
console.log(b1);
let b2 = 5;
if (true) {
    let b2 = 10;
    console.log(b2);
}
console.log(b2);
//console.log("====== End - The let Keyword - Block Scope =====");

//console.log("====== Start - The let Keyword - Hoisting =====");
console.log(c1);
var c1 = 5;
//console.log(c2);
let c2 = 5; // ReferenceError: Cannot access 'c2' before initialization
//console.log("====== END - The let Keyword - Hoisting =====");


//console.log("====== Start - The let Keyword - A step towards closure =====");
window.onload = function () {
    var div,
        container = document.getElementById("container");

    for (var i = 0; i < 3; i++) {
        div = document.createElement("div");
        div.onclick = () => {
            alert("This is box #" + i);
        };
        container.appendChild(div);
    }

    for (let j = 3; j < 6; j++) {
        div = document.createElement("div");
        div.onclick = () => {
            alert("This is box #" + j);
        };
        container.appendChild(div);
    }
};
//console.log("====== END - The let Keyword - A step towards closure =====");
console.log("====== End Workshop example =====");
