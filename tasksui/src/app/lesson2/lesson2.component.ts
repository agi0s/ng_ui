import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  inputArray = '1, 15, 25, 35, 40, -1, 30';
  matrixNumber = 5;

  matrix(number = 5){
  
    return addMatrix(makeMatrix(number));
  
    function addMatrix(matrix) {
      let tbody = ``,
          row;

      for (let i = 0; i < matrix.length; i+= 1) {
          row = '';
          matrix[i].forEach ( e => row += `<td>${e}</td>` );
          tbody += `<tr>${row}</tr>`;
      }
  
      
      let table = `<table>
                      ${tbody}
                  </table>`;

      let style = `<style>
      table, td, th {
        border: 1px solid rgba(0,0,0,0.2);
    }
    
    td, th {
        text-align: center;
        width: 50px;
        height: 50px;
    }
                  </style>`;
      return style+table;
  }
  
  
  
  function makeMatrix(number) {
      const matrix = make2DArray(number);
      let i = 0,
          j = 0,
          di = 0,
          dj = 1,
          currentNumber = 1;
  
      while (currentNumber <= number * number) {
          matrix[i][j] = currentNumber;
          currentNumber += 1;
  
          if (j + dj === number ||
              i + di === number ||
              j + dj === -1 ||
              matrix[i + di][j + dj])
          {
                  let tempDI = di;
                  di = dj;
                  dj = -tempDI;
          }
  
          i += di;
          j += dj;
      }
  
      return matrix;
  }

    function make2DArray(number) {
        const matrix = [];
        let i = number;
        while(i){
            matrix.push(new Array(number));
            i -= 1;
        }
        return matrix;
    }
  }

  
  
  arrayByRule(array = [1,56,3,8,0]){
    let operateArray = array.sort ( (a, b) => {
      return b - a;
    });
  
    let i = 0, 
        k = 0,
        resultArray = [];
  
      operateArray.forEach( (element, index) => {
      if(index % 2) {
        resultArray[operateArray.length - k - 1] = element;
        k++;
      } else {
        resultArray[i] = element;
        i++;
      }
    })
  
    return resultArray;
  }

  moreThanAverage(array = [1, 15, 25, 35, 40, -1, 30]){
      let average = 0,
          count = 0;

      array.forEach( element => average += element );
    
      average /= array.length;
    
      array.forEach ( element => (element > average) ? count += 1 : 1);
    
      return count;
  }

  printOutputComplex(output){
    let field = document.querySelector('#output');
      if(typeof this.inputArray == 'string'){
        var string = this.inputArray.split(','),
            readyArray = [];
            readyArray = string.map( element => +element );
      }
        field.innerHTML = output(readyArray);
    }

    printOutput(output){
        let field = document.querySelector('#output');
        field.innerHTML = output(+this.matrixNumber);
    }
  }

