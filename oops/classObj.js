/**
 * Classes were first introduced in the new version of the ES6 classes
 * which replaced the previously used functions. Class is nothing but a blueprint for an object of it. It is used to create an object mainly. If we relate it to a real-life example then it is like a plan for a building or house where that plan contains details about doors, windows, floors, etc. 
 * Based on the class which is the blueprint an object is made which can be referred to as a house in this example. 
 */

//class
class Person{
    name;
    age;
    accept(name,age){
        this.name=name
        this.age=age;
    }
    disp(){
        console.log(this.name)
        console.log(this.age)
    }
}

//object
var p1=new Person();
p1.accept("Prajwal",24);
p1.disp();
