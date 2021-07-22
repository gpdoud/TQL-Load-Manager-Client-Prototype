import { Shed } from "src/app/shed/shed.class";
import { CommodityDelivery } from "../commodity/commodity-delivery.class";
import { Commodity } from "../commodity/commodity.class";

export class Delivery{
    id: number = 0;
    pickDate!: Date;
    onSite: boolean = false;
    unloaded: boolean = false;
    shed!: Shed;
    commodityDelivery!: CommodityDelivery[];
}