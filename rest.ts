
let display=function()
{
    for(let i in arguments)
    {
        console.log(arguments[i])
    }
}

display('Red');
display('Red','blue');
display('Red','blue','green');
