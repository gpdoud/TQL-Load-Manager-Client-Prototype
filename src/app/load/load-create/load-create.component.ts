import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Load } from '../load.class';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-load-create',
  templateUrl: './load-create.component.html',
  styleUrls: ['./load-create.component.css']
})
export class LoadCreateComponent implements OnInit {
  load: Load = new Load();

  constructor(
    private loadsvc: LoadService,
    private router: Router,
  ) { }

  saveLoad(): void {
    this.loadsvc.create(this.load).subscribe(
      res => {console.debug("create success", res);
    this.router.navigateByUrl("/load/list");},
    err => {console.error(err);}
    );
  }

  ngOnInit(): void {
  }

}
