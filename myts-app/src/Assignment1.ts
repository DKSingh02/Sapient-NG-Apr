

// 1.Demonstrate how to use classes and interfaces
// Have common interface called “Calculator”
// 1.Implement  with InterestCalculator , show interest calculation
// 2.Implemement with “ShapeCalculator” ,Show shape calculation. 

// Calcultor Interface
interface Calculator {
    calculate (): void;
}

type Shapes = {
    square?: boolean,
    reactangle?: boolean,
  
}

// InterestCalculator class which implemet Calculator method and give
// defination to calculate method .
class InterestCalculator  implements Calculator {
    constructor ( public principle: number, public rate: number , public time: number) {
    
}
    // Calculate simple Interest
    public calculate(): void {
        const interest = (this.principle * this.rate * this.time) / 100;
        console.log(`Interest = ${interest}`);
    }
}

// ShapeCalculator class which implemet Calculator method and give
// defination to calculate method .
class ShapeCalculator  implements Calculator {
    constructor (public type: Shapes, public length: number, public breadth?: number) {
    
    }
     // Calculate Area of shape
    public calculate(): void {
        if(this.type.square) {
            console.log(`Shape is Square, Area = ${this.length * this.length}`);
        }else if(this.type.reactangle) {
            console.log(`Shape is Rectangle, Area = ${this.length * this.breadth}`);
        }
       
    }
}


const interest = new InterestCalculator(1000, 5, 2);
interest.calculate();

let firstShape = new ShapeCalculator( { square: true }, 10);
firstShape.calculate();

let secondShape = new ShapeCalculator( { reactangle: true }, 10, 20);
secondShape.calculate();