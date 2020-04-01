/**
 * TransactionType typed Interface 
 */
type TransactionType = {
  deposit?: boolean,
  withdraw?: boolean
}

/**
* CustomerInfo Interface having customer details
*/
interface CustomerInfo {
  name: string;
  job: string;
}

/**
* CustomerLogger method for method level decorator
*/
function CustomerLogger () {
  return function (target: any, props: string, descriptor: PropertyDescriptor) {
      console.log(`${props} method called.`);
  }
}

/**
* Entity method to just to denote class is Entity class by accepting a object
*/
function Entity (customerInfo: CustomerInfo) {
  return function (target: any) {
      Object.defineProperty(target.prototype, 'customerInfo', {
          value: customerInfo
      });
      console.log('Entity decorator called');
  }
}

/**
* Customer Class
*/
@Entity({name: 'Diwakar', job: 'UI Developer'})
class Customer {

  constructor(private balanceAmount: number = 0) {}

  @CustomerLogger()
  depositAmount(amount: number): void {
      this.balanceAmount = this.balanceAmount + amount;
  }

  @CustomerLogger()
  withdrawAmount(amount: number): void {
      this.balanceAmount = this.balanceAmount - amount;
  }

  @CustomerLogger()
  transaction (type: TransactionType, amount: number): void {
      if(type.deposit) {
          this.depositAmount(amount);
      }else if(type.withdraw) {
          this.withdrawAmount(amount);
      }
  }

  @CustomerLogger()
  getCustomerDetail(): string {
      return `Account Balance : ${(this as any).customerInfo.name}, ${(this as any).customerInfo.job} has ${this.balanceAmount}`;
  }
}

let customer = new Customer(8000);
customer.transaction({ deposit: true }, 10000);
customer.transaction({ withdraw: true }, 3000);
console.log(customer.getCustomerDetail());