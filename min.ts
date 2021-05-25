export {}
// // let messages="hello";

// /*
// let name:string="akash"
// let full:string=`my name is ${name}`
// console.log(full);
// */
// enum color {Red=5,Green,Blue}
// let c:color=color.Green
// console.log(c)

// let n:null=null
// let u:undefined=undefined

// let isnew:boolean=true
// let myname:string='hello'
// let a:number[]=[1,2,3,4,5,6]
// let b:Array<number>=[1,2,3]
// console.log(a,b)
// let person:[string,number]=['akash',22]     //tuple example

// let randomvalue:any=10;
//  randomvalue=true
//  randomvalue='akash'
 let myvariable:any=10
function hasname(obj:any):obj is {name:string}
{
    return !!obj&&typeof obj=="object"&& "name" in obj
}
if(hasname(myvariable)){console.log(myvariable.name)}
console.log(hasname(myvariable.name))
//  myvariable()
//  (myvariable as string).toUpperString()




