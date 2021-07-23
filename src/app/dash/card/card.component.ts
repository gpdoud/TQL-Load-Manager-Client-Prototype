import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() title!: string;
  
  constructor() { }
  
  contentDisplay: boolean = true;
  
  ngOnInit(): void {
  }
  
  showContent(): void{
    this.contentDisplay = true;
  }
  hideContent(): void{
    this.contentDisplay = false;
  }
}
