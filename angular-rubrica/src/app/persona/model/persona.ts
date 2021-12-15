export class Persona {
  constructor(
    public id: number,
    public nome: string,
    public cognome: string,
    public dataNascita: Date,
    public sesso: string,
    public telefono: number,
    public indirizzo?: string
  ) {}
}

/* private _id: number;
    private _nome: string;
    private _cognome: string;
    private _datanascita: Date;
    private _sesso: string;
    private _telefono: number;
    private _indirizzo: string;
    length: number;
    

    constructor(_id: number, _nome: string, _cognome: string,  _datanascita: Date, _sesso: string, _telefono: number, _indirizzo?: string) { 
        this._id = _id;
        this._nome = _nome;
        this._cognome = _cognome;
        this._datanascita = _datanascita;
        this._sesso = _sesso;
        this._telefono = _telefono;
        this._indirizzo = _indirizzo;
    }

    public set id(id: number) {
        this._id = id; //passo in input al set il valore id interessato
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
        this._cognome = cognome;
         //passo in input al set il valore cognome interessato
    }
    public get cognome(): string {
        return this._cognome;  //output -> _cognome
    }
    
    public set dataNascita(datanascita: Date) {
        this._datanascita = datanascita; //passo in input al set il valore datanascita interessato
    }
    public get dataNascita(): Date {
        return this._datanascita;
         //output -> _datanascita
    }
    dateUtente() {
        const dataUtente = new Date(this.dataNascita);
        return dataUtente.toISOString().substring(0,10);
      }

    public set sesso(sesso: string) {
        this._sesso = sesso;  //passo in input al set il valore id interessato
    }
    public get sesso(): string {
        return this._sesso; //output -> sesso
    }

    public set telefono(telefono: number) {
        this._telefono = telefono;  //passo in input al set il valore id interessato
    }
    public get telefono(): number {
        return this._telefono; //output -> _telefono
    }

    public set indirizzo(indirizzo: string) {
        this._indirizzo = indirizzo; //passo in input al set il valore indirizzo interessato
    }
    public get indirizzo(): string {
        return this._indirizzo; //output -> _indirizzo
    }

    get nomeCompleto(): string {
		return this._nome + ' ' + this._cognome;
    }
	set nomeCompleto(valore: string) {
		var parti = valore.toString().split(' ');
		this._nome = parti[0] || '';
		this._cognome = parti[1] || '';
    }   // <--- set and get per ottenere nome e cognome completo in un'unica riga

*/
