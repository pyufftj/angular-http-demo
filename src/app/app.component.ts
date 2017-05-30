import { Component } from '@angular/core';
import {ServerService} from "./server.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    servers=[
        {
            name:'TestServer',
            capacity:10,
            id:this.generateId()
        },
        {
            name:"liveServer",
            capacity:100,
            id:this.generateId()
        }

    ];

    constructor(public serverService:ServerService){

    }

    onSaveServer(){
        this.serverService.storeServer(this.servers).subscribe(
            (response)=>console.log(response),
            (error)=>console.log(error)
        );
    }

    onGetServer(){
        this.serverService.getServer().subscribe(
            (data)=>{
                console.log(data);
                this.servers=data;
            }
        );
    }

    onAddServer(name:string){
        this.servers.push({
            name:name,
            capacity:50,
            id:this.generateId()
        });
    }

    private generateId(){
        return Math.round(Math.random()*10000);
    }
}
