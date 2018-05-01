//Creating reactable class

class Rectangle{
    //constructor that takes lenght and breadth
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
    //Methos to calculate area
    calculateArea(){
        return this.length * this.breadth;
    }
    //getter to return area
    get area(){
        return this.calculateArea();
    }

}

const rect = new Rectangle(10, 20);

console.log(rect.area);

