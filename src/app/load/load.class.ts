import { Carrier } from "../carrier/carrier.class";
import { Customer } from "../customer/customer.class";
import { Shed } from "../shed/shed.class";
import { User } from "../user/user.class";

export class Load {
    id: number = 0;
    poNumber: number = 0;
    payTruckRate: number = 0;
    customerBillRate: number = 0;

    customerId: number = 0;
    customer: Customer | null = null;

    pickDate: Date = Date.;
    pickId: number = 0;
    pick: Shed | null = null;

    dropId: number = 0;
    drop: Shed | null = null;

    carrierId: number = 0;
    carrier: Carrier | null = null;

    userId: number = 0;
    user: User | null = null;
}