import { Component, OnInit } from '@angular/core';
import { Load } from '../load.class';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.css']
})
export class LoadListComponent implements OnInit {
  loads!: Load[];

  constructor(
    private loadsvc: LoadService
  ) { }

  ngOnInit(): void {
    this.loadsvc.list().subscribe(
      res => { console.log("Loads:", res); this.loads = res; },
      err => { console.error(err); });
  }

}
