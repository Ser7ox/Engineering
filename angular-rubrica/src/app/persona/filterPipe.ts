import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from './model/persona';

@Pipe({
  name: 'filterNames'
})

export class filterNames implements PipeTransform {
  transform(list: Persona[], filterText: string): Persona[] {
    return list ? list.filter(item => item.nome.search(new RegExp(filterText, 'i')) > -1) : [];
  }
}
