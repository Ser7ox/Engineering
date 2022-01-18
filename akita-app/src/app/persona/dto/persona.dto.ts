import { ID } from "@datorama/akita";
export class PersonaDto {
	id: ID;
	firstName: string;
	lastName: string;
	address: string;

    constructor(id: ID, firstName: string, lastName: string, address: string) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
        this.address = address;
	}
}