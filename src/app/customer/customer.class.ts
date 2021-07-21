import { User } from "../user/user.class";

export class Customer {
    id: number = 0;
    name: string ='';
    code: string ='';
    address: string ='';
    city: string ='';
    state: string ='';
    zip: string ='';
    status: boolean = false;


    userId: number = 0;
    user: User | null = null;


}
