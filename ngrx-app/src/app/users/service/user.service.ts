import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserConverter } from '../converter/userConverter';
import { UserDto } from '../dto/user.dto';
import { User } from '../model/user.model';
import { userState } from '../store/reducer/user.reducer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endPoint = 'http://localhost:3000';
  converter: UserConverter = new UserConverter();

  constructor(private httpClient: HttpClient,private store: Store<userState>) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers(): Observable<User[]> {
    return this.httpClient.get<UserDto[]>(this.endPoint + '/users').pipe(
      map((backEnd: UserDto[]) => {
        const user: User[] = [];
        backEnd.forEach((element) => {
          user.push(this.converter.DaDtoaModel(element));
        });
        return user;
      })
    );
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<UserDto>(this.endPoint + '/users/' + id, this.httpHeader)
    .pipe(map( (personaDto: UserDto) => { 
      return this.converter.DaDtoaModel(personaDto);
      })
    )
  }
}
