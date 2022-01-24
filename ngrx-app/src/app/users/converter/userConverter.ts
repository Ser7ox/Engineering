import { User } from '../model/user.model';
import { UserDto } from '../dto/user.dto';

export class UserConverter {
  constructor() {}

  public DaModelaDto(model: User): UserDto {
    let userDto: UserDto = new UserDto(
      model.id,
      model.nome,
      model.cognome,
      model.indirizzo
    );
    return userDto;
  }

  public DaDtoaModel(userDto: UserDto): User {
    let user: User = new User(
      userDto.id,
      userDto.firstName,
      userDto.lastName,
      userDto.address
    );
    return user;
  }
}
