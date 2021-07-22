import { Delivery } from "../delivery/delivery.class";
import { Commodity } from "./commodity.class";

export class CommodityDelivery {

    id: number = 0;

    commodityId: number = 0;
    commodity! : Commodity;

    deliveryId: number = 0;
    delivery! : Delivery
}
