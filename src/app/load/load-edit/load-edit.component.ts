import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Load } from '../load.class';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-load-edit',
  templateUrl: './load-edit.component.html',
  styleUrls: ['./load-edit.component.css']
})
export class LoadEditComponent implements OnInit {
  
    load!: Load;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loadsvc: LoadService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.loadsvc.get(this.id).subscribe(
      res => {console.log(res); this.load = res;},
      err => {console.error(err)}
    )
  }

  save(): void {
    this.load.id =+this.load.id;
    this.loadsvc.change(this.load).subscribe(
      res => {console.log("Load Saved"); this.router.navigateByUrl("load/list");},
      err => {console.error(err)}
    );

  }

}
