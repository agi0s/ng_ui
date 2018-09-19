import { Component, OnInit } from '@angular/core';
import { Task } from '../taskClass';
import { allTasks } from '../tasksList';
import { Router } from '@angular/router';


@Component({
  selector: 'app-arrows',
  templateUrl: './arrows.component.html',
  styleUrls: ['./arrows.component.css']
})
export class ArrowsComponent implements OnInit {

  tasks = allTasks;
  selectedTask: Task;
  lines = 5;
  symbol = '#';
 
  constructor(public router: Router) { }

  ngOnInit() {
  }



  halfArrowRight(lines = 5, symbol = "#") {
    let arrow = [],
        string = '',
        i = 0;

    for (; i < lines; i+=1) {
        string += symbol;
        arrow.push(string);
    }
    return arrow.join('\n');
  }

  halfArrowLeft(lines = 5, symbol = "#", space = ' ') {
    let arrow = '',
        array = [],
        i, j, k;


    for (i = 0; i < lines; i += 1) {
        arrow = '';
        j = lines - (i + 1),
            k = 0;

        while (j > 0) {
            arrow += space;
            j -= 1;
        }

        while (k < i + 1) {
            arrow += symbol;
            k += 1;
        }
        array.push(arrow);
    }
    return array.join('\n');
  }



arrowRight(lines = 5, symbol = "#", space = ' ') {
  function halfArrowRight(lines = 5, symbol = "#") {
    let arrow = [],
        string = '',
        i = 0;

    for (; i < lines; i+=1) {
        string += symbol;
        arrow.push(string);
    }
    return arrow;
  }

  let arrayFirstHalf = halfArrowRight(lines, symbol).reverse().splice(1),
      arraySecondHalf = halfArrowRight(lines, symbol);

  return arraySecondHalf.concat(arrayFirstHalf).join('\n');
}

arrowLeft(lines = 5, symbol = "#", space = ' ') {
  function halfArrowLeft(lines = 5, symbol = "#", space = ' ') {
    let arrow = '',
        array = [],
        i, j, k;


    for (i = 0; i < lines; i += 1) {
        arrow = '';
        j = lines - (i + 1),
            k = 0;

        while (j > 0) {
            arrow += space;
            j -= 1;
        }

        while (k < i + 1) {
            arrow += symbol;
            k += 1;
        }
        array.push(arrow);
    }
    return array;
  }

  function secondHalfLeft(lines = 5, symbol = "#", space = ' ') {
    let array = [],
        i, arrow, k, j;

    for (i = 0; i < lines; i += 1) {
        arrow = '';
        k = lines - (i + 1);
        j = lines - k;

        while (j > 0) {
            arrow = space + arrow;
            j -= 1;
        }

        while (k > 0) {
            arrow += symbol;
            k -= 1;
        }
        array.push(arrow);
    }
    return array;
  }

  let arrayFirstHalf = halfArrowLeft(lines, symbol, space),
  arraySecondHalf = secondHalfLeft(lines, symbol, space);
  arrayFirstHalf = arrayFirstHalf.concat(arraySecondHalf);
  return arrayFirstHalf.join('\n');
}

  generateInput() {
    let randomNumber = function generateNumber(max, min) {
          return Math.floor(Math.random() * (max - min) + min)
        };

    //lines.value = randomNumber(1,54);
    //symbol.value = String.fromCharCode(randomNumber(33,47));
  }


  printOutput(output){
    let field = document.querySelector('#output');
    field.innerHTML = `<pre>${output(this.lines, this.symbol)}</pre>`;
  }

}
