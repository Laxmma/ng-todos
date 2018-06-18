import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ITodo } from '../../shared/interfaces';

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.css']
})
export class AddEditTodoComponent implements OnInit {

  todo: ITodo = {
    'id': 0,
    'title': '',
    'isCompleted': false,
    'targetDate': '',
    'tags': '',
    'category': ''
  };

  constructor(private router: Router,
              private route: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getTodo(id);
  }

  getTodo(id: number) {
    this.todoService.getTodo(id)
        .subscribe((response: ITodo) => {
          this.todo = response;
          console.log(this.todo);
          // this.updateTagsOnLoad();
          // this.updateDate(this.todo.targetDate);
        });
  }

  submit() {
    
  }

}
