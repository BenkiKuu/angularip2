import { Component, OnInit } from '@angular/core';
import { Angularip2Service } from '../angularip2.service'
@Component({
  selector: 'app-angularip2',
  templateUrl: './angularip2.component.html',
  styleUrls: ['./angularip2.component.css']
})
export class Angularip2Component implements OnInit {
  angularip2: any[];
  angular1p2repo: any[];
  constructor(private angularip2Service: Angularip2Service) {
this.angularip2Service.profileInfo().subscribe(angularip2 => {
  console.log(angularip2);
  this.angularip2 = angularip2;
});
this.angularip2Service.profileRepos().subscribe(angular1p2repo => {})
  }

  ngOnInit() {
  }

}
