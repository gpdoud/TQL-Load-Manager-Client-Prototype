import { Carrier } from "../carrier/carrier.class";
import { Customer } from "../customer/customer.class";
import { Shed } from "../shed/shed.class";
import { User } from "../user/user.class";
import { CommodityDelivery } from "./commodity/commodity-delivery.class";
import { CommodityPickup } from "./commodity/commodity-pickup.class";
import { Commodity } from "./commodity/commodity.class";
import { Delivery } from "./delivery/delivery.class";
import { Pickup } from "./pickup/pickup.class";

export class Load {
    id: number = 0;
    poNumber: number = 0;
    payTruckRate: number = 0;
    customerBillRate: number = 0;

    customerId: number = 0;
    customer: Customer | null = null;
    
    pickup: Pickup[] = [];
   
    delivery: Delivery[] = [];

    carrierId: number = 0;
    carrier: Carrier | null = null;

}