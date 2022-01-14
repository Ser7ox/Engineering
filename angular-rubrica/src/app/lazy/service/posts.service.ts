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

  getAllData(): Observable<Posts[]> {
    return this.httpClient.get<PostsDto[]>(this.endPoint + '/posts')
    .pipe(map( (rispostaBackEnd: PostsDto[]) => { 
                  const data: Posts[] = []; 
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
        const data: Posts[] = []; 
        rispostaBackEnd.forEach(element => {
          data.push(this.Converter.convertToModel(element))
        })
    return data;
    })
    )
  }

  getDatafromId(id: number): Observable<Posts> {
    return this.httpClient.get<PostsDto>(this.endPoint + '/posts/' + id)
    .pipe(map( (postsDto: PostsDto) => {
            return this.Converter.convertToModel(postsDto);
    })
    )
  }

}
