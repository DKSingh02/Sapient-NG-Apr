var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * CustomerLogger method for method level decorator
 */
function CustomerLogger() {
    return function (target, props, descriptor) {
        console.log(props + " method called.");
    };
}
/**
 * Entity method to just to denote class is Entity class by accepting a object
 */
function Entity(customerInfo) {
    return function (target) {
        Object.defineProperty(target.prototype, 'customerInfo', {
            value: customerInfo
        });
        console.log('Entity decorator called');
    };
}
/**
 * Customer Class
 */
var Customer = /** @class */ (function () {
    function Customer(balanceAmount) {
        if (balanceAmount === void 0) { balanceAmount = 0; }
        this.balanceAmount = balanceAmount;
    }
    Customer.prototype.depositAmount = function (amount) {
        this.balanceAmount = this.balanceAmount + amount;
    };
    Customer.prototype.withdrawAmount = function (amount) {
        this.balanceAmount = this.balanceAmount - amount;
    };
    Customer.prototype.transaction = function (type, amount) {
        if (type.deposit) {
            this.depositAmount(amount);
        }
        else if (type.withdraw) {
            this.withdrawAmount(amount);
        }
    };
    Customer.prototype.getCustomerDetail = function () {
        return "Account Balance : " + this.customerInfo.name + ", " + this.customerInfo.job + " has " + this.balanceAmount;
    };
    __decorate([
        CustomerLogger(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Customer.prototype, "depositAmount", null);
    __decorate([
        CustomerLogger(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Customer.prototype, "withdrawAmount", null);
    __decorate([
        CustomerLogger(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Number]),
        __metadata("design:returntype", void 0)
    ], Customer.prototype, "transaction", null);
    __decorate([
        CustomerLogger(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], Customer.prototype, "getCustomerDetail", null);
    Customer = __decorate([
        Entity({ name: 'Diwakar', job: 'UI Developer' }),
        __metadata("design:paramtypes", [Number])
    ], Customer);
    return Customer;
}());
var customer = new Customer(8000);
customer.transaction({ deposit: true }, 10000);
customer.transaction({ withdraw: true }, 3000);
console.log(customer.getCustomerDetail());
