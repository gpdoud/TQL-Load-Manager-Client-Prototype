import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shed } from '../shed.class';
import { ShedService } from '../shed.service';

@Component({
  selector: 'app-shed-detail',
  templateUrl: './shed-detail.component.html',
  styleUrls: ['./shed-detail.component.css']
})
export class ShedDetailComponent implements OnInit {

  constructor(
    private shedsvc: ShedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
   ) {
   }
   shed!: Shed;
   display: boolean = false;

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    this.shedsvc.get(id).subscribe(
      res => {this.shed = res; console.debug("Shed loaded successfuly!", res)},
      err => console.error(err))
  }
  delete(): void{
    this.shedsvc.delete(this.getId()).subscribe(
      res => {this.shed = res; console.debug("Shed deleted successfuly!", res);
      this.router.navigateByUrl("/shed/list");},
      err => console.error(err))

  }
   
  getId(): number{
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = Number(routeParams.get('id'))
    return id;
  }

}
