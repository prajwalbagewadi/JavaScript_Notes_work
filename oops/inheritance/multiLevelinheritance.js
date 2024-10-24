//multi level inheritance

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
    acceptEmp(name,age,sal){
        super.accept(name,age)
        this.salary=sal;
    }
    dispEmp(){
        super.disp()
        console.log(this.salary)
    }
}

class Dept extends Emp{
    dept;
    acceptDept(name,age,sal,dept){
        super.acceptEmp(name,age,sal)
        this.dept=dept;
    }
    dispDept(){
        super.dispEmp()
        console.log(this.dept)
    }
}

//object
var d1=new Dept();
d1.acceptDept("Prajwal",24,25000,"SDE");
d1.dispDept();
