function a()
{
  this.a=10
}
a.prototype.z=30

function b() 
{
 a.call(this);
    this.b=20
    
}
b.prototype=Object.create(a.prototype)
var s=new b()
console.log(s.z)