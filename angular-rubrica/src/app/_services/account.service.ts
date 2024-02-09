import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../_model/account';
import { AccountConverter } from '../converter/accountConverter';
import { AccountDto } from '../dto/account.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endPoint = 'http://localhost:3000';
  accountConverter: AccountConverter = new AccountConverter;

  constructor(private httpClient: HttpClient) { }

  checkLogin(email:string, password:string): Observable<Account> {
    return this.httpClient.get<AccountDto[]>(this.endPoint + '/account' + '?email=' + email + '&password=' + password)
    .pipe(map( (arrayBackEnd: AccountDto[]) => {
                return this.accountConverter.accountDaDtoaModel(arrayBackEnd[0]);
        })
    )
  }

  httpError(error: { error: { message: string; }; status: string; message: string; }) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }
}
