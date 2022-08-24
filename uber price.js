class uberPrice{
    constructor(name,distance){
        this.name=name;
        this.distance=distance;  
    }


    getCarPrice(){
        
        let tariff = this.distance * 15;
       
        return `${this.name},The total cost for your car ride is ${this.distance * 15} only`;
    }
    
     getBikePrice(){
         return `${this.name},The total cost for your for ride is ${this.distance * 10} only`
     }
}

let ride1= new uberPrice("Kowsik",100);
let ride2 = new uberPrice("Kowsik",50)
console.log(ride1.getCarPrice())
console.log(ride2.getBikePrice())