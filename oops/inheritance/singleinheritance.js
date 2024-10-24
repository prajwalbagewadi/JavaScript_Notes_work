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

class Emp extends Person{
    salary;
    acceptEmp(name,age,salary){
        super.accept(name,age)
        this.salary=salary;
    }
    dispEmp(){
        console.log(this.name)
        console.log(this.age)
        console.log(this.salary)
    }
}

//object
var e1=new Emp();
e1.acceptEmp("Prajwal",24,25000);
e1.dispEmp();
