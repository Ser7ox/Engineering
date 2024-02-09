import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from './model/persona';

@Pipe({
  name: 'filtraCognome'
})

export class filtraCognome implements PipeTransform {
  transform(list: Persona[], filterText: string): Persona[] {
    return list ? list.filter(item => item.cognome.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
