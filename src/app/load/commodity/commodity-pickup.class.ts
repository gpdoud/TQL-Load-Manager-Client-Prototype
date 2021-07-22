import { Pickup } from "../pickup/pickup.class";
import { Commodity } from "./commodity.class";

export class CommodityPickup {
    id: number = 0;

    commodityId: number = 0;
    commodity! : Commodity;

    pickupId: number = 0;
    pickup! : Pickup;
}
