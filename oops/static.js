
class Product{
    name;
    price;
    static cnt=0;
    static count(){
        Product.cnt++;
    }
    constructor(n,p){
        this.name=n;
        this.price=p;
        Product.count();
    }
    disp(){
        console.log("name="+this.name)
        console.log("price="+this.price)
    }
    static viewcount(){
        console.log("cnt="+Product.cnt)
    }
}




var p1=new Product("s24",67000)
p1.disp()
var p2=new Product("s24ULTRA",121000)
p2.disp()
Product.viewcount();
