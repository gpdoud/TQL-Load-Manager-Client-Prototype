import { Carrier } from "../carrier/carrier";
import { Customer } from "../customer/customer.class";
import { Shed } from "../shed/shed.class";
import { User } from "../user/user.class";

export class Load {
    id: number = 0;
    PoNumber: number = 0;
    PayTruckRate: number = 0;
    CustomerBillRate: number = 0;

    CustomerId: number = 0;
    customer: Customer | null = null;

    PickId: number = 0;
    pick: Shed | null = null;

    DropId: number = 0;
    drop: Shed | null = null;

    CarrierId: number = 0;
    carrier: Carrier | null = null;

    UserId: number = 0;
    user: User | null = null;
}