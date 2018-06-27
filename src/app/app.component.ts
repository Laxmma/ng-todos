import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAddEditTodo:boolean = false;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if(event instanceof ActivationEnd){
        if(event.snapshot.routeConfig.path === 'todo/:id' || event.snapshot.routeConfig.path === 'todo-reactive/:id') {
          this.isAddEditTodo = true;
        } else {
          this.isAddEditTodo = false;
        }
      }
    });
  }
}
