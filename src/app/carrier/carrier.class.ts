import { Dispatcher } from "./dispatcher.class";
import { Driver } from "./driver.class";

export class Carrier {
    id: number = 0;
    name: string = "";
    address: string = "";
    phone: string = "";
    email: string = "";
    dispatchers!: Dispatcher[];
    drivers!: Driver[];

}
