export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthday: number;
    street: string;
    zipCode: number;
    city: string

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthday = obj ? obj.birthday : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthday: this.birthday,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}