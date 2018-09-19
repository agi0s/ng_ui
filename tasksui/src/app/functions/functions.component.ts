import { Component, OnInit } from '@angular/core';
import { Task } from '../taskClass';
import { allTasks } from '../tasksList';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.css']
})
export class FunctionsComponent implements OnInit {
  tasks = allTasks;
  selectedTask: Task;
 
  constructor() { }

  ngOnInit() {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

}

