import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    // selector: '[app-server]',
    // selector: '.app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
serverName : string = "_______";
outputText : string = "Server Not Created yet";

    createServer(){
        this.outputText = "Successfully created Server named " + this.serverName;
    }
}

