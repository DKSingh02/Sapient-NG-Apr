

interface Calculator {
    calcullate (): void;
}

class InterestCalculator  implements Calculator {

    
 constructor (public principle: number, public rate: number , public time: number) {
    
}
    public calcullate(): void {
        const interest = (this.principle * this.rate * this.time) / 100;
        console.log(`Interest = ${interest}`);
    }
}

class ShapeCalculator  implements Calculator {

    constructor (public length: number, public breath: number) {
    
    }
        public calcullate(): void {
            const area = (this.length * this.breath );
            console.log(`Shape Area = ${area}`);
        }
}


const interest = new InterestCalculator(1000, 5, 2);
interest.calcullate();

let shape = new ShapeCalculator(10, 20);
shape.calcullate();