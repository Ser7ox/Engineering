export class Persona {
    private _nome: string;
    private _cognome: string;
    private _sesso: string;
    private _telefono: number;
    private _indirizzo: string;
    length: number;
    

    constructor(_nome: string, _cognome: string, _sesso: string, _telefono: number, _indirizzo: string) { 
        
        this._nome = _nome;
        this._cognome = _cognome;
        this._sesso = _sesso;
        this._telefono = _telefono;
        this._indirizzo = _indirizzo; 
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

    
}
  

