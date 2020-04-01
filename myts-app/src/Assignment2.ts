// 2.Demonstrate how to use Decorators
// Declare Customer class.
// A.	Declare Customer Logger Decorator to  show log messages  to track each customer transactions : method level
// B.	Pass all customer information to Customer Object  via Decorators
// C.	Create Decorator called “Entity” , just denote this class is entity class



// Entity method to just to denote class is Entity class by accepting a object
// From decorator as an argument

// function Entity(classInfo: any) {
//     return function (target: any) {
//         Object.defineProperty(target.prototype, 'classInfo', { value: classInfo })
//     }
// }


// Entity method just to show class is Entity class with no arguments
function Entity(target: any) {
    Object.defineProperty(target.prototype, "classInfo", {
                value: 'This is a Entity class'
            });
}

// First Method
//CustomerLogger method for method level decorator

function CustomerLogger(target: any, props: any, descriptor: any) {
    if(descriptor === undefined) {
      descriptor = Object.getOwnPropertyDescriptor(target, props);
    }
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        let args = [];
        for (let index = 0; index < arguments.length; index++) {
            args[index - 0] = arguments[index];
        }
        let result = originalMethod.apply(this, args);
        console.log('result:' + result);
        return result;
    };
    return descriptor;
}

// Second Method and Simple Way
// function CustomerLogger(value: any) {
//     return function (target: any, prop: any, propdescriptor: PropertyDescriptor) {
//         propdescriptor.writable = value;
//         propdescriptor.configurable = value
//     }
// }


// @Entry({ name: 'This is a entry class' })
@Entity
class Customer { 
  constructor(public firstNAme : string, public lastName : string) { 
  }
  
  @CustomerLogger
  public displayCutomerInfo(profile : string, technology : string) : string { 
    return `${this.firstNAme}  ${this.lastName} :  ${profile}  ${technology}`; 
  }
}

let customer = new Customer("Diwakar", "Kumar") as any;

console.log( `${customer.classInfo}`)

//console.log( `${customer.classInfo.name}`)

console.log(`Customer Info - ${customer.displayCutomerInfo( 'Front End Developer :', 'Javascript')}`);