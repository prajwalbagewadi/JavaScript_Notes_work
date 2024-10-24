//consturctor Destructor
//A constructor in JavaScript is a special function used to create and initialize an object instance.
/*
JavaScript does not have a built-in concept of destructors like some other programming languages. A destructor is typically used to perform cleanup when an object is no longer needed (e.g., releasing resources).

In JavaScript, garbage collection automatically cleans up memory when there are no more references to an object. However, if you need to perform cleanup tasks (like removing event listeners or stopping timers), you usually implement a method in your class for that purpose.
*/
//class
class Car{
    company
    model
    year
    price
    constructor(c,m,y,p){
        this.company=c
        this.model=m
        this.year=y
        this.price=p
    }
    disp(){
        console.log(this.company)
        console.log(this.model)
        console.log(this.year)
        console.log(this.price)
    }
    cleanup(){
        console.log("cleanup tasks")
    }
}

//obj
var c1=new Car("Maruti Suzuki","Swift LXi","17 Oct 2024","Rs. 6.49 Lakh")
c1.disp()
c1.cleanup()
