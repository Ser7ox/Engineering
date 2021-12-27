import { Json } from "../model/json";
import { JsonDto } from "../dto/json.dto";

export class JsonConverter {
    constructor () {}

    public JsonDaModelaDto(model: Json): JsonDto {
        let jsonDto: JsonDto = new JsonDto (model.userId, model.id, model.title, model.body);
        return jsonDto;
    }

    public JsonDaDtoaModel(jsonDto: JsonDto): Json {
        let json: Json = new Json (jsonDto.userId, jsonDto.id, jsonDto.title, jsonDto.body);
        return json;
    }
}