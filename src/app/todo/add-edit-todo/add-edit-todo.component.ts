import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ITodo, ITag } from '../../shared/interfaces';

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

  tags: Array<ITag> = [
    {label: "Important", checked: false},
    {label: "Urgent", checked: false}
  ];

  categories: ReadonlyArray<string> = ['Home', 'Work', 'Personal', 'Social','Bill Payments', 'Other'];

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
          this.updateTagsOnLoad();
          // this.updateDate(this.todo.targetDate);
        });
  }

  updateTagsOnLoad() {
    let tags: string[] = this.todo.tags.split(','); //['Urgent']
    for (const tagLabel of tags) {
      var tagIndex = this.tags.findIndex(tag => tag.label == tagLabel.trim());
      this.tags[tagIndex].checked = true;
    }
  }

  submit() {
    
  }

}
