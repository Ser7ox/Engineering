import { Component, OnInit } from '@angular/core';
import { Posts } from '../model/posts';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-paginazione',
  templateUrl: './paginazione.component.html',
  styleUrls: ['./paginazione.component.css']
})
export class PaginazioneComponent implements OnInit {

  postsData:Posts[] = [];
  showLoad = true;
  page = 1;
  forward: boolean;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
  
    this.estraiPosts();
    
  }

  setPage(parameter: boolean) {
    if (parameter) {
      this.page++;
    } else {
      this.page--;
    }
      this.estraiPosts();
    
  }

  estraiPosts() {
    this.postsService.getDatafromPage(this.page).subscribe((data: Posts[]) => {
      this.postsData = data;
      this.showLoad = false;
    }) 
  }

}
