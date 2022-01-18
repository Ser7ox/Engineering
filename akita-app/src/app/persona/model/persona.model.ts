import { ID } from "@datorama/akita";

export class Persona {

    private _id: ID;
    private _nome: string;
	private _cognome: string;
	private _indirizzo: string;

    constructor(id: ID, nome: string, cognome: string, indirizzo: string ) {
    this._id = id;
    this._nome = nome;
    this._cognome = cognome;
    this._indirizzo = indirizzo;
    }
    
	public get id() {
		return this._id;
	}

    public get nome(): string {
		return this._nome;
	}

    public get cognome(): string {
		return this._cognome;
	}

    public get indirizzo(): string {
		return this._indirizzo;
	}

    public set id(id: ID) {
		this._id = id;
	}

    public set nome(value: string) {
		this._nome = value;
	}

    public set cognome(value: string) {
		this._cognome = value;
	}

    public set indirizzo(value: string) {
		this._indirizzo = value;
	}

}