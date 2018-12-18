import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MiApp';
  nombre= 'Chema';
  edad:number = 29;
  
  getName():string{
    return this.nombre+" tiene "+this.edad + " y esta .... ";
  }
}
