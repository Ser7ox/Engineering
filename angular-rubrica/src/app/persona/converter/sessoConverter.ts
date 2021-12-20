import { Sesso } from "../model/sesso";
import { SessoDto } from "../dto/sesso.dto";

export class SessoConverter {

    constructor () {}
    
    public SessoDaModelaDto(model: Sesso):SessoDto {
        let sessoDto: SessoDto = new SessoDto(model.uomo, model.donna);
        return sessoDto;
    }

    public SessoDaDtoaModel(sessoDto: SessoDto):Sesso {
        let sesso: Sesso = new Sesso(sessoDto.uomo, sessoDto.donna);
        return sesso;
    }
}