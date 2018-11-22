import { Component } from "@angular/core";
import { DataService } from "./data.service";
import { images } from "./images";
//import exec = require("sync-exec");
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [DataService]
})
export class AppComponent {
  ledgerBlocks: any;
  Images = images;
  results:any;

  constructor(private dataService: DataService) {

  }

  collapsed = true;

  getLendingChannelData(path:string){
    this.dataService.getLedgerData(path).subscribe(data => {
      this.ledgerBlocks = data;
      this.ledgerBlocks.map(data => (data["images"] = this.Images[0].images));
    });

  }
  getRecordsChannelData(path:string){
    this.dataService.getLedgerData(path).subscribe(data => {
      this.ledgerBlocks = data;
      this.ledgerBlocks.map(data => (data["images"] = this.Images[7].images));
    });

  }
  getBooksChannelData(path:string){
    this.dataService.getLedgerData(path).subscribe(data => {
      this.ledgerBlocks = data;
      this.ledgerBlocks.map(data=>(data["images"]=this.Images[6].images));
    });

  }
}
