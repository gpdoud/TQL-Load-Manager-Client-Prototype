import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dispatcher } from '../dispatcher.class';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-dispatcher-detail',
  templateUrl: './dispatcher-detail.component.html',
  styleUrls: ['./dispatcher-detail.component.css']
})
export class DispatcherDetailComponent implements OnInit {

  dispatcher!: Dispatcher;
  id: number = 0;

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

  deleteDispatcher(){
    this.id =this.route.snapshot.params.id
    this.dispatchersvc.remove(this.id).subscribe(
      res => {console.log("Success:", res); this.dispatcher = res; this.router.navigateByUrl("carrier/list")},
      err => {console.error(err)});
  }

}
