import { Pipe, PipeTransform } from '@angular/core';
import { Shed } from './shed.class';

@Pipe({
  name: 'searchShed'
})
export class SearchShedPipe implements PipeTransform {

  transform(sheds: Shed[], searchCriteria: string): Shed[] {
    if(sheds == null || searchCriteria.length == 0){
      return sheds;
    }
    let search = searchCriteria.toLowerCase();
    let selectedCusts: Shed[] = [];
    for(let shed of sheds){
      if(shed.id.toString().includes(search)
    || shed.name.toLowerCase().includes(search)
    || shed.address.toLowerCase().includes(search)
    || shed.city.toLowerCase().includes(search)
    || shed.state.toLowerCase().includes(search)
    || shed.zip.toLowerCase().includes(search)
    ){
        selectedCusts.push(shed);
      }
    }
    return selectedCusts;
  }

}
