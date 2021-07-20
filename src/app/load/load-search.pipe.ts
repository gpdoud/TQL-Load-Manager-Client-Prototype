import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loadSearch'
})
export class LoadSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
