// "use strict";
// // let a:string='javascript'
// // console.log(a)
// var b = 20;
// function a() {
//     var b;
//     console.log(b);
// }
var display = function () {
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
display('Red');
display('Red', 'blue');
display('Red', 'blue', 'green');