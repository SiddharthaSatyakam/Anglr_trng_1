import { Component } from '@angular/core';
// import { enableProdMode } from '@angular/core';
// enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valueView=false;
  log=[];

  onTap(){
    this.valueView=!this.valueView;
    this.log.push(this.log.length + 1)
  }
  
}
