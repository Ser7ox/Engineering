import { AccountDto } from "../dto/account.dto";
import { Account } from "../model/account";

export class AccountConverter {

    constructor () {}
    
    public AccountDaModelaDto(model: Account):AccountDto {
        let accountDto: AccountDto = new AccountDto(model.email, model.password);
        return accountDto;
    }

    public AccountDaDtoaModel(accountDto: AccountDto):Account {
        let account: Account = new Account(accountDto.email, accountDto.password);
        return account;
    }
}