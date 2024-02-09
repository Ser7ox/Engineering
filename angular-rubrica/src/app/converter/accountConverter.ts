import { Account } from "../_model/account";
import { AccountDto } from "../dto/account.dto";

export class AccountConverter {

    public accountDaModelaDto(model: Account):AccountDto {
        const accountDto: AccountDto = new AccountDto(model.email, model.password, model.role);
        return accountDto;
    }

    public accountDaDtoaModel(accountDto: AccountDto):Account {
        const account: Account = new Account(accountDto.email, accountDto.password, accountDto.role);
        return account;
    }
}
