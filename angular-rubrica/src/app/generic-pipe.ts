import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'maiuscolo' })

export class GenericPipe implements PipeTransform {
  transform(value: string): string {
    const first = value.toUpperCase();
    return first;
  }
}
