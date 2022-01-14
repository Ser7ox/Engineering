import { PersonaDto } from "../dto/persona.dto";
import { Persona } from "../model/persona";

export class PersonaConverter {

    public DaModelaDto(model: Persona):PersonaDto {
        const personaDto: PersonaDto = new PersonaDto(model.id, model.nome, model.cognome, model.dataNascita, model.sesso, model.telefono, model.indirizzo);
        return personaDto;
    }

    public DaDtoaModel(personaDto: PersonaDto):Persona {
        const persona: Persona = new Persona(personaDto.id, personaDto.name, personaDto.surname, personaDto.birthDay, personaDto.sex, personaDto.number, personaDto.address);
        return persona;
    }
}