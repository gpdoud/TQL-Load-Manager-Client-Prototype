import { Component, OnInit } from '@angular/core';
import { Student } from '../student.class';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  students!: Student[];
  

  ngOnInit(): void {
  }

}
