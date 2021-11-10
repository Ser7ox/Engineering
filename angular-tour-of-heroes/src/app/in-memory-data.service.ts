import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { ID: 11, Nome: "Tempesta" },
      { ID: 12, Nome: "Cap. America" },
      { ID: 13, Nome: "Iron Man" },
      { ID: 14, Nome: "Superman" },
      { ID: 15, Nome: "Batman" },
      { ID: 16, Nome: "Antman" },
      { ID: 17, Nome: "Aquaman" },
      { ID: 18, Nome: "Thor Ragnarok" },
      { ID: 19, Nome: "Cap. Marvel" },
      { ID: 20, Nome: "Hulk" }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.ID)) + 1 : 11;
  }
}
