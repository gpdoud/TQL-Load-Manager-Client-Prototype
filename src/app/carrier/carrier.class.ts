import { Dispatcher } from "./dispatcher/dispatcher.class";
import { Driver } from "./driver/driver.class";

export class Carrier {
    id: number = 0;
    name: string = "";
    address: string = "";
    phone: string = "";
    email: string = "";
    dispatchers!: Dispatcher[];
    drivers!: Driver[];

}
