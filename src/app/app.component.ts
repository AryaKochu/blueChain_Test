import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  droneMap: string = '';
  droneMapArr: string[];
  rectCoord: string[];
  origin = [0,0];
  droneDropCoord: string[];
  droneDir: string;
  droneRoute: string[];
  result: boolean = false;

  constructor() {
    this.droneMap = '';
    this.droneMapArr = [];
    this.rectCoord = [];
    this.origin = [];
    this.droneDropCoord = [];
    this.droneDir = '';
    this.droneRoute = [];
  }

  getDroneTarget () {
    this.droneMapArr = this.droneMap && this.droneMap.split('');
    this.rectCoord.push(this.droneMapArr[0]);
    this.rectCoord.push(this.droneMapArr[2]);
    this.droneDropCoord.push(this.droneMapArr[4]);
    this.droneDropCoord.push(this.droneMapArr[6]);
    this.droneDir = this.droneMapArr[8];
    this.droneRoute = this.droneMapArr.splice(10);
    this.droneRoute.forEach( (value) =>{
      if(value === 'M'){
          switch(this.droneDir) {
          case 'N': this.droneDropCoord[1] = String(parseInt(this.droneDropCoord[1], 10) + 1); break;
          case 'S': this.droneDropCoord[1] = String(parseInt(this.droneDropCoord[1], 10) - 1); break;
          case 'W': this.droneDropCoord[0] = String(parseInt(this.droneDropCoord[0], 10) - 1); break;
          case 'E': this.droneDropCoord[0] = String(parseInt(this.droneDropCoord[0], 10) + 1); break;
        }
      } else if (value === 'Q') {
        return;
      } else {
        this.updateDir(value);
      }
   });
   this.result = true;
  }

  updateDir(side) {
     switch(this.droneDir) {
         case 'N': this.droneDir = (side === 'R') ? 'E' : 'W'; break;
         case 'S': this.droneDir = (side === 'R') ? 'W' : 'E'; break;
         case 'W': this.droneDir = (side === 'R') ? 'N' : 'S'; break;
         case 'E': this.droneDir = (side === 'R') ? 'S' : 'N'; break;
      }
  }
}
