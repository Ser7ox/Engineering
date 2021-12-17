export class AccountDto {
    constructor(
      public email: string,
      public password: string,
      public role: string
    ) {}
  }