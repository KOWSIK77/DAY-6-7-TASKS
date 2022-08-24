class circle{
    constructor(circle,circleRadius,color){
        this.circle=circle;
        this.circleRadius=circleRadius;
        this.color=color;
    }
    
    
    setcircleRadius(rad){this.circleRadius=rad;}
    getRadius(){return `The Radius of the circle is - ${this.circleRadius}`}
        

    setcolor(col){this.color=col;}
    getColor(){return `The color of the circle is ${this.color}`}

    toString(){return `Radius = ${this.circleRadius}` , `Color = ${this.color}`  }
    
    getArea(){ return (Math.PI * this.circleRadius * this.circleRadius).toFixed(2)}
    
    getCircumference(){ return  (2* Math.PI * this.circleRadius).toFixed(2)}

}

var circle1= new circle (1,3,"red")

console.log(`Area of the circle is ${circle1.getArea()}`)
console.log(`Circumference of the circle is ${circle1.getCircumference()}`)
console.log(circle1.getColor())

circle1.setcircleRadius(5);
console.log( circle1.getRadius())

circle1.setcolor("blue");
console.log(circle1.getColor())