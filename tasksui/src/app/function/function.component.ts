import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../taskClass';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})

export class FunctionComponent implements OnInit {
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
  }

}
