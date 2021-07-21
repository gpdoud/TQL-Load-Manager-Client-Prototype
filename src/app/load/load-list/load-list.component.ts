import { Component, OnInit } from '@angular/core';
import { Load } from '../load.class';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.css']
})
export class LoadListComponent implements OnInit {

  constructor(
    private loadsvc: LoadService
  ) { }
  loads!: Load[];

  ngOnInit(): void {
    this.loadsvc.list().subscribe(
      res => {this.loads = res; console.debug(res)},
      err => {console.error(err)}
    )
  }

}
