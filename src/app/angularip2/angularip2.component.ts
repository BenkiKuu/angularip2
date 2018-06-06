import { Component, OnInit } from '@angular/core';
import { Angularip2Service } from '../angularip2.service'
@Component({
  selector: 'app-angularip2',
  templateUrl: './angularip2.component.html',
  styleUrls: ['./angularip2.component.css']
})
export class Angularip2Component implements OnInit {

  constructor(private angularip2Service: Angularip2Service) {
this.angularip2Service.profileInfo().subscribe(angularip2 => {
  console.log(angularip2);
})
  }

  ngOnInit() {
  }

}
