// 1.Demonstrate how to use classes and interfaces
// Have common interface called “Calculator”
// 1.Implement  with InterestCalculator , show interest calculation
// 2.Implemement with “ShapeCalculator” ,Show shape calculation. 

/**
 * Calcultor Interface 
 */
interface Calculator {
    calculate (): void;
}

/**
 * Shapes typed Interface 
 */
type Shapes = {
    square?: boolean,
    reactangle?: boolean,
  
}

/**
 * InterestCalculator class which implemet Calculator method and give
 * defination to calculate method
 */
class InterestCalculator  implements Calculator {
    constructor ( private principle: number, private rate: number , private time: number) {}

    // Calculate simple Interest
    public calculate(): void {
        const interest = (this.principle * this.rate * this.time) / 100;
        console.log(`Interest = ${interest}`);
    }
}

/**
 * hapeCalculator class which implemet Calculator method and give
 * defination to calculate method
 */
class ShapeCalculator  implements Calculator {
    constructor (private type: Shapes, private length: number, private breadth?: number) {}

    // Calculate Area of shape
    public calculate(): void {
        if(this.type.square) {
            console.log(`Shape is Square, Area = ${this.length * this.length}`);
        }else if(this.type.reactangle) {
            console.log(`Shape is Rectangle, Area = ${this.length * this.breadth}`);
        }  
    }
}

// instance to calculte interest
const interest = new InterestCalculator(1000, 5, 2);
interest.calculate();

// instance to calculte shape
let firstShape = new ShapeCalculator( { square: true }, 10);
firstShape.calculate();
let secondShape = new ShapeCalculator( { reactangle: true }, 10, 20);
secondShape.calculate();