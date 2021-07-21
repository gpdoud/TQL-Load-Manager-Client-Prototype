import { Pipe, PipeTransform } from '@angular/core';
import { Load } from './load.class';

@Pipe({
  name: 'loadSearch'
})
export class LoadSearchPipe implements PipeTransform {

  transform(sheds: Load[], searchCriteria: string): Load[] {
    if(sheds == null || searchCriteria.length == 0){
      return sheds;
    }
    let search = searchCriteria.toLowerCase();
    let selectedLoads: Load[] = [];
    for(let load of sheds){
      if(load.id.toString().includes(search)
    || (load.poNumber.toString().includes(search)
    || load.customer?.name.toLowerCase().includes(search)
    || load.customer?.code.toLowerCase().includes(search)
    || load.pick?.name.toLowerCase().includes(search)
    || load.pick?.state.toLowerCase().includes(search)
    || load.pick?.city.toLowerCase().includes(search)
    || load.pick?.zip.toLowerCase().includes(search)
    || load.pick?.address.toLowerCase().includes(search)
    || load.drop?.name.toLowerCase().includes(search)
    || load.drop?.state.toLowerCase().includes(search)
    || load.drop?.city.toLowerCase().includes(search)
    || load.drop?.zip.toLowerCase().includes(search)
    || load.drop?.address.toLowerCase().includes(search)
    || load.carrier?.name.toLowerCase().includes(search)
    || load.carrier?.state.toLowerCase().includes(search)
    || load.carrier?.city.toLowerCase().includes(search)
    || load.carrier?.zip.toLowerCase().includes(search)
    || load.carrier?.address.toLowerCase().includes(search)
    || load.user?.firstname.toLowerCase().includes(search)
    || load.user?.lastname.toLowerCase().includes(search)
    || load.user?.username.toLowerCase().includes(search)
    )){
        selectedLoads.push(load);
      }
    }
    return selectedLoads;
  }

}
