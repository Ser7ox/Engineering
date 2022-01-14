export class PersonaDto {
	id: number;
	firstName: string;
	lastName: string;
	address: string;

    constructor(id: number, firstName: string, lastName: string, address: string) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
        this.address = address;
	}
}