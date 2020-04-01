// Entry method to just to denote class is entry class by accepting a object
// From decorator as an argument
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// function Entry(classInfo: any) {
//     return function (target: any) {
//         Object.defineProperty(target.prototype, 'classInfo', { value: classInfo })
//     }
// }
// Entry method just to show class is entry class with no arguments
function Entry(target) {
    Object.defineProperty(target.prototype, "classInfo", {
        value: 'This is a entry class'
    });
}
// First Method
//CustomerLogger method for method level decorator
function CustomerLogger(target, props, descriptor) {
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, props);
    }
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var index = 0; index < arguments.length; index++) {
            args[index - 0] = arguments[index];
        }
        var result = originalMethod.apply(this, args);
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
var Customer = /** @class */ (function () {
    function Customer(firstNAme, lastName) {
        this.firstNAme = firstNAme;
        this.lastName = lastName;
    }
    Customer.prototype.displayCutomerInfo = function (profile, technology) {
        return this.firstNAme + "  " + this.lastName + " :  " + profile + "  " + technology;
    };
    __decorate([
        CustomerLogger,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", String)
    ], Customer.prototype, "displayCutomerInfo", null);
    Customer = __decorate([
        Entry,
        __metadata("design:paramtypes", [String, String])
    ], Customer);
    return Customer;
}());
var customer = new Customer("Diwakar", "Kumar");
console.log("" + customer.classInfo);
//console.log( `${customer.classInfo.name}`)
console.log("Customer Info - " + customer.displayCutomerInfo('Front End Developer :', 'Javascript'));
