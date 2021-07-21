import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(user: User[], searchCriteria: string): User[] {
    if(user == null || searchCriteria.length == 0) {
      return user;
    }
    let search = searchCriteria.toLowerCase();
    let selectedUser: User[]=[];
    for(let u of user) {
      if (
        u.id.toString().includes(search)
        || u.username.toLowerCase().includes(search)
        || u.password.toLowerCase().includes(search)
        || u.firstname.toLowerCase().includes(search)
        || u.lastname.toLowerCase().includes(search)
       
      )
      { selectedUser.push(u); }
    }
    return selectedUser;
  }

}
