import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shed } from '../shed.class';
import { ShedService } from '../shed.service';

@Component({
  selector: 'app-shed-create',
  templateUrl: './shed-create.component.html',
  styleUrls: ['./shed-create.component.css']
})
export class ShedCreateComponent implements OnInit {

  constructor(
    private shedsvc: ShedService,
    private router: Router
  ) {
  }
  newShed = new Shed();

  ngOnInit(): void {
  }
  create(): void {
    this.shedsvc.create(this.newShed).subscribe(
      res => { console.debug("Shed created successfuly!", res);
      this.router.navigateByUrl("/shed/list");
    },
      err => console.error(err))
  }
}
