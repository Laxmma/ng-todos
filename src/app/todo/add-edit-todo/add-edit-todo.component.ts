import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';
import { ITodo, ITag } from '../../shared/interfaces';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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

  now = new Date();

  targetDate: NgbDateStruct =  {year: this.now.getFullYear(), month: this.now.getMonth()+1, day: this.now.getDate()};

  errorMessage:string = '';

  operationText: string = 'Save';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private todoService: TodoService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    if(id !== '0') {
      this.getTodo(id);
      this.operationText = 'Update';
    }
    
  }

  getTodo(id: number) {
    this.todoService.getTodo(id)
        .subscribe((response: ITodo) => {
          this.todo = response;
          console.log(this.todo);
          this.updateTagsOnLoad();
          this.updateDate(this.todo.targetDate);
        });
  }

  updateTagsOnLoad() {
    let tags: string[] = this.todo.tags.split(',');
    for (const tagLabel of tags) {
      var tagIndex = this.tags.findIndex(tag => tag.label == tagLabel.trim());
      this.tags[tagIndex].checked = true;
    }
  }

  updateDate(dateStr) {
    let date = new Date(dateStr);
    this.targetDate =  {year: date.getFullYear(), month: date.getMonth()+1, day: date.getDate()};
  }

  updateTagOnChange(tagChanged, event) {
    var tagIndex = this.tags.findIndex(tag => tag.label == tagChanged.label);
    this.tags[tagIndex].checked = event.target.checked;
  }


  submit() {
    // Preparing final payload start
    this.todo.tags = '';
    for(let tag of this.tags) {
      if(tag.checked) {
        if(this.todo.tags) {
          this.todo.tags += `,${tag.label}`;
        } else {
          this.todo.tags += `${tag.label}`;
        }
      }  
    }

    this.todo.targetDate = `${this.targetDate.year}-${this.targetDate.month}-${this.targetDate.day}`;
    // Preparing final payload end

    if(this.todo.id) {
      this.todoService.updateTodo(this.todo)
          .subscribe((todo: ITodo) => {
            if(todo) {
              this.router.navigate(['todo-list']);
            } else {
              this.errorMessage = 'Failed to update Todo';
            }
          },
          (err: any) => {
            this.errorMessage = 'Failed to update Todo';
          });
    } else {
      this.todoService.insertTodo(this.todo)
          .subscribe((todo: ITodo) => {
            if(todo) {
              this.router.navigate(['todo-list']);
            } else {
              this.errorMessage = 'Failed to save Todo';
            }
          },
          (err: any) => {
            this.errorMessage = 'Failed to save Todo';
          });
    }
  }

  cancle(event) {
    event.preventDefault();
    this.router.navigate(['todo-list']);
  }

}
