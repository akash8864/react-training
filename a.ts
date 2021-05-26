
// let a:string='javascript'
// console.log(a)
var display = function (...color) {
    console.log(color);
    for (var i in arguments) {
        
        console.log(arguments[i]);
    }
};
display('Red');
display('Red', 'blue');
display('Red', 'blue', 'green');
