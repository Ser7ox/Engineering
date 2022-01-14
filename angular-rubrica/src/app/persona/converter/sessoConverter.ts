import { Sesso } from "../model/sesso";
import { SessoDto } from "../dto/sesso.dto";

export class SessoConverter {

    public SessoDaModelaDto(model: Sesso):SessoDto {
        const sessoDto: SessoDto = new SessoDto(model.uomo, model.donna);
        return sessoDto;
    }

    public SessoDaDtoaModel(sessoDto: SessoDto):Sesso {
        const sesso: Sesso = new Sesso(sessoDto.uomo, sessoDto.donna);
        return sesso;
    }
}