import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Shed } from '../shed.class';
import { ShedService } from '../shed.service';

@Component({
  selector: 'app-shed-list',
  templateUrl: './shed-list.component.html',
  styleUrls: ['./shed-list.component.css']
})
export class ShedListComponent implements OnInit {

  constructor(
    private shedsvc : ShedService,
    private router: Router
  ) { }

  sheds!: Shed[];

  searchCriteria: string = "";
  
  ngOnInit(): void {
    this.shedsvc.list().subscribe(
      res => {this.sheds = res; console.debug(res)},
      err => {console.error(err)}
    )
  }

}
