import { Injectable } from '@angular/core';
import {Http,Headers,Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class ServerService {

  constructor(private http:Http) { }

  storeServer(servers:any[]){
     const headers=new Headers({'Content-Type':'application/json'});
     return this.http.put('https://angualr-http.firebaseio.com/data.json',
         servers,
         {headers:headers});
  }

  getServer(){
      return this.http.get('https://angualr-http.firebaseio.com/data.json').map(
          (response:Response)=>{
              const data=response.json();
              for (const server of data){
                  server.name="FETCHED_"+server.name;
              }
              return data;
          }
      );
  }

 test(){

 }
}
