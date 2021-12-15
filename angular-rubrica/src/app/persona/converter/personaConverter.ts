import { PersonaDto } from "../dto/persona.dto";
import { Persona } from "../model/persona";

export class PersonaConverter {

    constructor () {}
    
    public DaModelaDto(model: Persona):PersonaDto {
        let personaDto: PersonaDto = new PersonaDto(model.id, model.nome, model.cognome, model.dataNascita, model.sesso, model.telefono, model.indirizzo);
        return personaDto;
    }

    public DaDtoaModel(personaDto: PersonaDto):Persona {
        let persona: Persona = new Persona(personaDto.id, personaDto.name, personaDto.surname, personaDto.birthDay, personaDto.sex, personaDto.number, personaDto.address);
        return persona;
    }
}