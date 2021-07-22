import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer.class';

@Pipe({
  name: 'searchCustomer'
})
export class SearchCustomerPipe implements PipeTransform {

  transform(custs: Customer[], searchCriteria: string): Customer[] {
    if(custs == null || searchCriteria.length === 0)
    {return custs;}
  
let search = searchCriteria.toLowerCase();
let selectedCusts: Customer[] = [];
for(let c of custs){
  if(c.id.toString().includes(search)
  || c.name.toLowerCase().includes(search)
  || c.address.toLowerCase().includes(search)
  || c.city.toLowerCase().includes(search)
  || c.state.toLowerCase().includes(search)  
  )
  {selectedCusts.push(c);}
}
return selectedCusts;
}
}
