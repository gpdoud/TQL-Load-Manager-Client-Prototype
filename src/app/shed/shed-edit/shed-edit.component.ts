import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shed } from '../shed.class';
import { ShedService } from '../shed.service';

@Component({
  selector: 'app-shed-edit',
  templateUrl: './shed-edit.component.html',
  styleUrls: ['./shed-edit.component.css']
})
export class ShedEditComponent implements OnInit {

  constructor(
    private shedsvc : ShedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  shed!: Shed;

  searchCriteria: string = "";
  
  ngOnInit(): void {
    this.shedsvc.get(this.getId()).subscribe(
      res => {this.shed = res; console.debug(res)},
      err => {console.error(err)}
    )
  }

  save(): void{
    const id = this.getId();
    this.shedsvc.update(this.shed).subscribe(
      res => {this.shed = res; console.debug("Shed updated successfuly!", res); 
      this.router.navigateByUrl("/shed/list");},
      err => console.error(err))

  }

  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }
}
