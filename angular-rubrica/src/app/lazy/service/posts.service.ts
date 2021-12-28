import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostsConverter } from '../converter/postsConverter';
import { PostsDto } from '../dto/posts.dto';
import { Posts } from '../model/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  endPoint = 'https://jsonplaceholder.typicode.com';
  Converter: PostsConverter = new PostsConverter;

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Posts[]> {
    return this.httpClient.get<PostsDto[]>(this.endPoint + '/posts')
    .pipe(map( (rispostaBackEnd: PostsDto[]) => { 
                  let data: Posts[] = []; 
                  rispostaBackEnd.forEach(element => {
                    data.push(this.Converter.convertToModel(element))
    })
    return data;
    })
    )
  }

  getDatafromPage(pageNumber: number): Observable<Posts[]> {
    return this.httpClient.get<PostsDto[]>(this.endPoint + '/posts?_page=' + pageNumber)
    .pipe(map( (rispostaBackEnd: PostsDto[]) => {
      if (rispostaBackEnd) {
        console.log("if")
        let data: Posts[] = []; 
        rispostaBackEnd.forEach(element => {
          data.push(this.Converter.convertToModel(element))
        })
      
    return data;
      } else {
        console.log("else")
        return null;
      }
    })
    )
  }

}
