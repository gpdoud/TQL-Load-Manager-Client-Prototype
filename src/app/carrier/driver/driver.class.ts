import { Carrier } from "../carrier.class";

export class Driver {
id: number = 0;
carrierId: number = 0;
carrier!: Carrier;
firstname: string ="";
lastname: string ="";
phone: string="";
email: string="";
truckNumber: string ="";
trailerNumber: string="";
equipment: string="";
isCckApproved: boolean =false;
}
