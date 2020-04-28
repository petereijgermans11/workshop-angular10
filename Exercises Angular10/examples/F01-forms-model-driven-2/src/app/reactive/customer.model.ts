export class Customer {
    firstName: string = "First Name";
    lastName: string = "Last Name";
    email: string = "test@email.com";
    phoneNumber: string = "0612398723";

    addresses: Address[] = this.createAddresses();


    private createAddresses(): Address[] {
        const address1 = new Address();
        const address2 = new Address();
        address2.address = "Other Address";

        return [address1, address2];
    }
}

export class Address {
    address: string = "Address line 1";
    country: string = "Country";
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}
    

