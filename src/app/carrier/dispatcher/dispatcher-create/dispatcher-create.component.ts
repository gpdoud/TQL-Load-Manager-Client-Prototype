import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dispatcher } from '../dispatcher.class';
import { DispatcherService } from '../dispatcher.service';

@Component({
  selector: 'app-dispatcher-create',
  templateUrl: './dispatcher-create.component.html',
  styleUrls: ['./dispatcher-create.component.css']
})
export class DispatcherCreateComponent implements OnInit {

  newDispatcher = new Dispatcher();
  dispatcher: Dispatcher = new Dispatcher();
  dispatchers: Dispatcher[] = [];

  constructor(
    private dispatchersvc: DispatcherService,
    private router: Router,
    private route : ActivatedRoute
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


    getId(): number {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get('carrierid'))
      return id;
    }
  

  ngOnInit(): void {
    this.dispatchersvc.list().subscribe(
      res => {console.log(res); this.dispatchers = res;},
      err => {console.error(err);}
    )
  }

}
