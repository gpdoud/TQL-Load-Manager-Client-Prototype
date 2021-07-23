import { Shed } from "src/app/shed/shed.class";
import { Commodity } from "../commodity/commodity.class";

export class Pickup{
    id: number = 0;
    pickDate!: Date;
    onSite: boolean = false;
    loaded: boolean = false;
    shed!: Shed;
    commodities!: Commodity[];
}