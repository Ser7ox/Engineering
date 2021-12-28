import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  postsDetail: Data;
  showLoad: boolean = true;

  constructor(private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.actRoute.data.subscribe(data => {
      setTimeout(() => {
      this.postsDetail = data;
      this.showLoad = false;
    },300);
    })
  }

  back() {
    this.router.navigate(['/lazy']);
  }

}
