/**
 * Created by chenyao on 15/12/21.
 */
function inheritPrototype(sub,sup){
   var prototype = Object(sup.prototype);
    prototype.constructor = sub;
    sub.prototype = prototype;
}

function Sup(name){
    this.name = name;
}

Sup.prototype.printName = function(){
    console.log(this.name);
}

function Sub(name,age){
    Sup.call(this,name);
    this.age = age;
}

inheritPrototype(Sub,Sup);

Sub.prototype.printAge = function(){
    console.log(this.age);
}

//test
var supObj = new Sup("sup");
supObj.printName();
var subObj = new Sub("sub",10);
subObj.printName();
subObj.printAge();