import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountConverter } from '../converter/accountConverter';
import { AccountDto } from '../dto/account.dto';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  endPoint = 'http://localhost:3000';
  Converter: AccountConverter = new AccountConverter;

  constructor(private httpClient: HttpClient) { }

  checkLogin(email:string, password:string): Observable<Account> {
    return this.httpClient.get<AccountDto>(this.endPoint + '/account' + '?email=' + email + '&password=' + password)
    .pipe(map( (arrayBackEnd: AccountDto) => {
                if (arrayBackEnd) { 
                  let account: Account; 
                  account = arrayBackEnd;
                  return account;
          }
          else {
            return null;
          }
        }
        
      )
    )
  }

  httpError(error: { error: { message: string; }; status: any; message: any; }) {
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