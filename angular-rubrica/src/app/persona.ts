export class Persona {
    private _id: number;
    private _nome: string;
    private _cognome: string;
    private _telefono: number;
    private _indirizzo: string;

    constructor(_id: number, _nome: string, _cognome: string, _telefono: number, _indirizzo: string) { 
        this._id = _id;
        this._nome = _nome;
        this._cognome = _cognome;
        this._telefono = _telefono;
        this._indirizzo = _indirizzo; 
    }

    public set id(id: number) {
        this._id = id;  //passo in input al set il valore id interessato
    }
    public get id(): number {
        return this._id; //output -> _id
    }

    public set nome(nome: string) {
        this._nome = nome; //passo in input al set il valore nome interessato
    }
    public get nome(): string {
        return this._nome; //output -> _nome
    }

    public set cognome(cognome: string) {
        this._cognome = cognome; //passo in input al set il valore cognome interessato
    }
    public get cognome(): string {
        return this._cognome; //output -> _cognome
    }

    public set telefono(telefono: number) {
        this.telefono = telefono;  //passo in input al set il valore id interessato
    }
    public get telefono(): number {
        return this.telefono; //output -> _telefono
    }

    public set indirizzo(indirizzo: string) {
        this._indirizzo = indirizzo; //passo in input al set il valore indirizzo interessato
    }
    public get indirizzo(): string {
        return this._indirizzo; //output -> _indirizzo
    }
}
  

