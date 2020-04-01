

// 1.Demonstrate how to use classes and interfaces
// Have common interface called “Calculator”
// 1.Implement  with InterestCalculator , show interest calculation
// 2.Implemement with “ShapeCalculator” ,Show shape calculation. 

// Calcultor Interface
interface Calculator {
    calculate (): void;
}

// InterestCalculator class which implemet Calculator method and give
// defination to calculate method .
class InterestCalculator  implements Calculator {
    constructor (public principle: number, public rate: number , public time: number) {
    
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
    constructor (public length: number, public breath: number) {
    
    }
     // Calculate Area of shape
    public calculate(): void {
        const area = (this.length * this.breath );
        console.log(`Shape Area = ${area}`);
    }
}


const interest = new InterestCalculator(1000, 5, 2);
interest.calculate();

let shape = new ShapeCalculator(10, 20);
shape.calculate();