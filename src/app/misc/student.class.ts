export class Student{
    firstname: string = "";
    lastname: string = "";
    city: string = "";
    state: string = "";
    zip: string = "";
    photo: string = "";
    power: string = "";
    

    constructor(firstname: string, lastname: string, city: string, state: string, zip: string, photo: string, power: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.photo = photo;
        this.power = power;
    }
}