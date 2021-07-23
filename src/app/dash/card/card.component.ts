import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() title!: string;
  
  constructor() { }
  
  cardVisible: boolean = true;
  
  ngOnInit(): void {
  }
  
  hideCard(): void{
    this.cardVisible = false;
  }
}
