
export class Prova {
    nome: string;
    cognome: string;
    indirizzo: string;
    constructor(obj: any) { 
        this.nome = obj && obj.nome || null;
        this.cognome = obj && obj.cognome || null;
        this.indirizzo = obj && obj.indirizzo || null;
    }
    name() { 
        return `${this.nome}`;
    }
    surname() { 
        return `${this.cognome}`;
    }
    address() { 
        return `${this.indirizzo}`;
    }
  }
  
  

    
    