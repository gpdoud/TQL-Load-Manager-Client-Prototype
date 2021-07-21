import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dispatcher } from '../dispatcher.class';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-dispatcher-create',
  templateUrl: './dispatcher-create.component.html',
  styleUrls: ['./dispatcher-create.component.css']
})
export class DispatcherCreateComponent implements OnInit {

  dispatcher: Dispatcher = new Dispatcher();
  dispatchers: Dispatcher[] = [];

  constructor(
    private dispatchersvc: DispatcherService,
    private router: Router
  ) { }

    save(): void {
      this.dispatcher.id = +this.dispatcher.id;
      this.dispatchersvc.create(this.dispatcher).subscribe(
        res => {
          console.log("Creation Successful"); this.router.navigateByUrl("dispatcher/list")
      },
      err => {console.error(err)
      });
    }



  ngOnInit(): void {
    this.dispatchersvc.list().subscribe(
      res => {console.log(res); this.dispatchers = res;},
      err => {console.error(err);}
    )
  }

}
