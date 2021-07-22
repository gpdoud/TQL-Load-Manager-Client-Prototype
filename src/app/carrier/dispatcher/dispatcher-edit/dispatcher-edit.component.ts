import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dispatcher } from '../dispatcher.class';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-dispatcher-edit',
  templateUrl: './dispatcher-edit.component.html',
  styleUrls: ['./dispatcher-edit.component.css']
})
export class DispatcherEditComponent implements OnInit {

  dispatcher! : Dispatcher;
  id: number =0;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private dispatchersvc: DispatcherService

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.dispatchersvc.get(this.id).subscribe(
      res => {console.log(res); this.dispatcher = res;},
      err => {console.error(err)}
    )
  }


  save(): void {
    this.dispatcher.id =+this.dispatcher.id;
    this.dispatchersvc.change(this.dispatcher).subscribe(
      res => { console.log("Create successful"); this.router.navigateByUrl("carrier/list");},
      err => {console.error(err)});
  }

}
