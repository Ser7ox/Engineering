import { Component, OnInit } from '@angular/core';
import { Json } from '../model/json';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-paginazione',
  templateUrl: './paginazione.component.html',
  styleUrls: ['./paginazione.component.css']
})
export class PaginazioneComponent implements OnInit {

  jsonData:Json[] = [];
  page = 1;
  showLoad = true;

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.fetchData();
  }


  fetchData() {
    this.jsonService.getData().subscribe((data: Json[]) => {
      this.jsonData = data;
      this.showLoad = false;
    })
  }

  pageChange(event: number) {
    this.page = event;
  }
}
