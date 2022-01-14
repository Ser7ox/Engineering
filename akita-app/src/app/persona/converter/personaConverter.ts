import { PersonaDto } from "../dto/persona.dto";
import { Persona } from "../model/persona.model";

export class PersonaConverter {

    constructor () {}
    
    public DaModelaDto(model: Persona):PersonaDto {
        let personaDto: PersonaDto = new PersonaDto(model.id, model.nome, model.cognome, model.indirizzo);
        return personaDto;
    }

    public DaDtoaModel(personaDto: PersonaDto):Persona {
        let persona: Persona = new Persona(personaDto.id, personaDto.firstName, personaDto.lastName, personaDto.address);
        return persona;
    }
}