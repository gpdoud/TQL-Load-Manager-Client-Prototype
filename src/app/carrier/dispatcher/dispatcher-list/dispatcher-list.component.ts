import { Component, OnInit } from '@angular/core';
import { Dispatcher } from '../dispatcher.class';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-dispatcher-list',
  templateUrl: './dispatcher-list.component.html',
  styleUrls: ['./dispatcher-list.component.css']
})
export class DispatcherListComponent implements OnInit {

  dispatchers: Dispatcher[] = [];

  searchCriteria: string="";
  sortColumn: string ="id";
  sortAsc: boolean = true;

  sortFn(column: string): void{
    if(column === this.sortColumn){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortColumn = column;
    this.sortAsc = true;
  }
 

  constructor(
    private dispatchersvc: DispatcherService
    
  ) { }

  ngOnInit(): void {
    this.dispatchersvc.list().subscribe(
      res => {console.log("Dispatcher:", res);
      this.dispatchers = res;
    },
    err => {console.error(err);}
    );
  }

}
