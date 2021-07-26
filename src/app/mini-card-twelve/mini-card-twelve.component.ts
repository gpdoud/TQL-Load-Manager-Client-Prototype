import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-card-twelve',
  templateUrl: './mini-card-twelve.component.html',
  styleUrls: ['./mini-card-twelve.component.css']
})
export class MiniCardTwelveComponent implements OnInit {


  title: string = "T-12 BR";
  value: number = 4119.94;
  color: string = "green";
  isIncrease: boolean = true;
  isCurrency: boolean = true;
  duration: string = "Week Over Week";
  percentValue: number = 0.0419;

  constructor() { }

  ngOnInit(): void {
  }

}
