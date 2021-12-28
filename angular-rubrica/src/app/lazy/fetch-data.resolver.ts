import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Posts } from './model/posts';
import { PostsService } from './service/posts.service';

@Injectable({
  providedIn: 'root'
})
export class FetchDataResolver implements Resolve<Observable<Posts>> {

  constructor (private postsService: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Posts> {
    const id = route.params['id'];
    return this.postsService.getDatafromId(id);
  }
}
