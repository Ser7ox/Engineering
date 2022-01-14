import { AccountDto } from "../dto/account.dto";
import { Account } from "../_model/account";

export class AccountConverter {
    
    public AccountDaModelaDto(model: Account):AccountDto {
        const accountDto: AccountDto = new AccountDto(model.email, model.password, model.role);
        return accountDto;
    }

    public AccountDaDtoaModel(accountDto: AccountDto):Account {
        const account: Account = new Account(accountDto.email, accountDto.password, accountDto.role);
        return account;
    }
}