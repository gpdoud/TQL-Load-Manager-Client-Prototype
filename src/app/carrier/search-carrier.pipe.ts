import { Pipe, PipeTransform } from '@angular/core';
import { Carrier } from './carrier.class';

@Pipe({
  name: 'searchCarrier'
})
export class SearchCarrierPipe implements PipeTransform {

  transform(carrier: Carrier[], searchCriteria: string): Carrier[] {
    if(carrier == null || searchCriteria.length == 0) {
      return carrier;
    }
    let search = searchCriteria.toLowerCase();
    let selectedCarrier: Carrier[]=[];
    for(let c of carrier) {
      if (
        c.id.toString().includes(search)
        || c.name.toLowerCase().includes(search)
        || c.address.toLowerCase().includes(search)
        || c.city.toLowerCase().includes(search)
        || c.state.toLowerCase().includes(search)
        || c.zip.toString().toLowerCase().includes(search)
        || c.phone.toLowerCase().includes(search)
        || c.email.toLowerCase().includes(search)
      )
      { selectedCarrier.push(c); }
    }
    return selectedCarrier;
  }

}
