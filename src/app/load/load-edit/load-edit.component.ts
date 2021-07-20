import { Component, OnInit } from '@angular/core';
import { Load } from '../load.class';

@Component({
  selector: 'app-load-edit',
  templateUrl: './load-edit.component.html',
  styleUrls: ['./load-edit.component.css']
})
export class LoadEditComponent implements OnInit {

  constructor() { }

  load!: Load;
  ngOnInit(): void {
  }

}
