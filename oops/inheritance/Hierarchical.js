//Hierarchical inheritance

//class
class Person{
    name;
    age;
    accept(name,age){
        this.name=name;
        this.age=age;
    }
    dispPerson(){
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
}

class Emp extends Person{
    salary;
    acceptEmp(name,age,salary){
        super.accept(name,age);
        this.salary=salary;
    }
    dispEmp(){
        super.dispPerson()
        console.log("salary="+this.salary);
    }
}

class Dept extends Emp{
    dept;
    acceptDept(name,age,salary,dept){
        super.acceptEmp(name,age,salary);
        this.dept=dept;
    }
    dispDept(){
        super.dispEmp()
        console.log("Dept="+this.dept);
    }
}

class Desg extends Emp{
    desg;
    acceptDesg(emp,desg){
        super.acceptEmp(emp.name,emp.age,emp.salary);
        this.desg=desg;
    }
    dispDesg(){
        super.dispEmp();
        console.log("Desg="+this.desg);
    }
}

//object
var d1=new Emp();
d1.acceptEmp("Prajwal",24,3500000);
var d1Desg=new Desg();
d1Desg.acceptDesg(d1,"Teamlead");
d1Desg.dispDesg();

/*
Output:

name=undefined
age=undefined
salary=undefined
Desg=undefined
*/
