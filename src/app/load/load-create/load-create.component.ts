import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shed } from 'src/app/shed/shed.class';
import { ShedService } from 'src/app/shed/shed.service';
import { Load } from '../load.class';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-load-create',
  templateUrl: './load-create.component.html',
  styleUrls: ['./load-create.component.css']
})
export class LoadCreateComponent implements OnInit {
  newLoad = new Load();
  load: Load = new Load();
  loads : Load[] = [];
  shed!: Shed;
  sheds: Shed[] = [];

  constructor(
    private loadsvc: LoadService,
    private router: Router,
    private shedsvc: ShedService
  ) { }

  save(): void {
    this.load.id =+this.load.id
    console.debug(this.load)
    this.loadsvc.create(this.load).subscribe(
      res => {console.debug("create success", res);
    this.router.navigateByUrl("/load/list");},
    err => {console.error(err);}
    );
  }

  ngOnInit(): void {
    this.shedsvc.list().subscribe(
      res => {console.log(res); this.sheds = res;},
      err => {console.error(err);}
    )
  }

}
