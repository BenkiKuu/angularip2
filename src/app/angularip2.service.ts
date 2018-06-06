import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/add/operator/map';

@Injectable()
export class Angularip2Service {
  private username:string;
  private clientid = '3ea2e8101ae8e7c6aad4';
  private clientsecret = '268d37f4f77ba9f37fe637f9ee8634dc10338149';

  constructor(private my_http:Http) {
    console.log("service is now ready!");
    this.username = 'BenkiKuu';
   }

   profileInfo(){
     return this.my_http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
     .map(res => res.json());
   }
}
