import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeworkComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  //chess: 
  chessWidth = 6;
  chessHeight = 4;
  chessSymbol  = "*";
  //envelop:
  aSide = 0;
  bSide = 0;
  cSide = 0;
  dSide = 0;
  //sortTriangles
  //palindrome
  stringPalindrome = 'edit secret looks rat madam tar skool terces tide';
  //tickets
  ticketMin = 102954;
  ticketMax = 657321;
  //sequence
  sequenceQty = 10;
  sequenceNum = 25;
  //fib
  fibMin = 3;
  fibMax = 55;
  fibLength = 0;


triangleParser(){
	let field = document.querySelector('.trianglesField').children,
        resultArray = [],
        trianglesObject = [];

	for (let i = 0; i < field.length; i++){
		let child = field[i].children;
			resultArray[i] = [];

		for (let k = 0; k < child.length; k++){
            let childFix = child[k].firstElementChild as HTMLInputElement;
			resultArray[i].push(childFix.value);
		}
	}
    
    for (let i = 0; i < resultArray.length; i += 1){
        trianglesObject[i] = {};
        for (let k = 0; k < 3; k++){
            if(k==0){trianglesObject[i].vertices = resultArray[i][0];}
        trianglesObject[i][resultArray[i][0][k]] = resultArray[i][k + 1];
    }
    }

  return this.printOutputSort(this.sortTriangles, trianglesObject);
}



  addField(){
    let trianglesField = document.querySelector('.trianglesField'),
        triangle = `
        <div class="input-field col s3">
        <input value="klm" id="array" type="text" class="validate">
        <label class="active" for="array">Verticies</label>
      </div>
      <div class="input-field col s3">
          <input value="25" id="array" type="text" class="validate">
          <label class="active" for="array">side one</label>
        </div>
        <div class="input-field col s3">
            <input value="25" id="array" type="text" class="validate">
            <label class="active" for="array">side two</label>
          </div>
          <div class="input-field col s2">
              <input value="25" id="array" type="text" class="validate">
              <label class="active" for="array">side three</label>
          </div>
          </div>`,

        div = document.createElement('div');
        div.setAttribute('class','triangle');
        div.innerHTML = triangle;
    trianglesField.appendChild(div);
  }
  removeField(){
    let trianglesField = document.querySelector('.trianglesField');
    trianglesField.removeChild(trianglesField.lastChild);
  }

  drawChessboard(width = 6, height = 5, symbol = "*") {
    var board = ``,
        array = [];

    //for loops specifying number of lines and symbols per line
    for (var i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            board += `${symbol} `;
        }

        if (i % 2 !== 0) {
            board = " " + board;
        }

        board += '\n';
        array.push(board);
        board = '';
    }
    return array.join('');
}

sortTriangles(array) {
    //debugger;

    let trianglesArray = [...array],
        resultArray = [];

    trianglesArray.sort((a, b) => {
        return heronFormula(b) - heronFormula(a);
    });

    trianglesArray.forEach(triangle => resultArray.push(triangle.vertices));

    return resultArray;

    function heronFormula(triangle) {
        var keys = Object.keys(triangle),
            a = triangle[keys[1]],
            b = triangle[keys[2]],
            c = triangle[keys[3]],
            p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c));
    }
}

Palindrome(value = "123444321") {
    value += '';
    var max_length = 0,
        palindrome = '';

    for (let i = 0; i < value.length; i++) {
        let subString = value.substr(i, value.length),
            j = subString.length;
        while (j) {
            let stringOperate = subString.substr(0, j);

            if (isPalindrome(stringOperate) && stringOperate.length > max_length) {
                max_length = stringOperate.length;
                if (stringOperate.length === value.length) {
                    return palindrome = stringOperate;
                }
                palindrome = stringOperate;
            }
            j -= 1;
        }
    }
    if (!palindrome) return 0;
    return palindrome;

    function isPalindrome(subString) {
        subString += '';
        var reversed = subString.split("").reverse().join("");
        return subString == reversed;
    }
}

canWrapEnvelope(envOne={a: 15, b: 25}, envTwo={c: 10, d: 19}){
return canWrap(envOne, envTwo);

function canWrap(envOne, envTwo) {
  envOne.a < envOne.b ? swapSides(envOne) : envOne;
  envTwo.c < envTwo.d ? swapSides(envTwo) : envTwo;

  if (envOne.a > envTwo.c &&
      envOne.b > envTwo.d) {
      return 1;
  }
  if (
      envOne.a < envTwo.c &&
      envOne.b < envTwo.d) {
      return 2;
  }

  if (envOne.a < envTwo.c && envOne.b >= envTwo.d) {
      CarverTheorem(envOne, envTwo, 1);
  }

  if (envOne.c < envTwo.a && envOne.d >= envTwo.b) {
      CarverTheorem(envTwo, envOne, 2);
  }

  return 0;
}

function swapSides(env) {
    let sides = Object.keys(env),
        temp;
    temp = env[sides[0]];
    env[sides[0]] = env[sides[1]];
    env[sides[1]] = temp; 
}

function CarverTheorem(envOne, envTwo, envNum) {
  let envOneSides = Object.keys(envOne);
  let envTwoSides = Object.keys(envTwo);

  let [a, b] = [envOne[envOneSides[0]], envOne[envOneSides[1]]];
  let [p, q] = [envTwo[envTwoSides[0]], envTwo[envTwoSides[1]]];

  if ((((a + b) / (p + q)) * ((a + b) / (p + q)) + ((a - b) / (p - q)) * ((a - b) / (p - q))) >= 2) {
      return envNum;
  }

  return 0;
}
}

effectiveHappyTicket(context = {
  min: 102954,
  max: 657321
}) {
  return happyTicket(context);

  function happyTicket(context) {
      let obj = {};

      if (simpleMethod(context) > complexMethod(context)) {
          obj["winner"] = 'simpleMethod',
              obj["tickets"] = simpleMethod(context);
      } else {
        obj["winner"] = 'complexMethod',
              obj["tickets"] = complexMethod(context);
      }
      return JSON.stringify(obj);
  }

  function simpleMethod(context) {
      let counter = 0, i;
      for (i = context.min; i <= context.max; i += 1) {
          if ((i / 100000 % 10 ^ 0) + (i / 10000 % 10 ^ 0) + (i / 1000 % 10 ^ 0) ===
              (i / 100 % 10 ^ 0) + (i / 10 % 10 ^ 0) + (i % 10)) {
              counter += 1;
          }
      }
      return counter;
  };

  function complexMethod(context) {
      let counter = 0, i;
      for (i = context.min; i <= context.max; i += 1) {
          if ((i / 100000 % 10 ^ 0) + (i / 1000 % 10 ^ 0) + (i / 10 % 10 ^ 0) ===
              (i / 10000 % 10 ^ 0) + (i / 100 % 10 ^ 0) + (i % 10)) {
              counter += 1;
          }
      }
      return counter;
  }

}

numericalSequence(n = 10, m = 25) {
  for (var i = 0, d = 1, string = []; d <= n; i++) {
      if (i * i > m) {
          string.push(i);
          d++;
      }
  }
  return string.join(',');
}

fibonacci(context = {
  min: 3,
  max: 50,
  length
}) {
  var fib = [],
      a = 1,
      b = 1,
      c = 0;

  if (context.min && context.max) {
      for (let i = 3; i <= context.max; i++) {
          c = a + b;
          a = b;
          b = c;
          fib.push(b);
      }
      return fib.slice(context.min, fib.length);
  } else {
      fib.push(1, 1);
      for (let i = 3; i <= context.length; i++) {
          c = a + b;
          a = b;
          b = c;
          fib.push(b);
      }
      return fib;
  }
}

sequenceOutput(output){
  let field = document.querySelector('#output');
  field.innerHTML = `<style>div{overflow-wrap: break-word;}</style>
                    <div>${output(this.sequenceQty, this.sequenceNum)}</div>`;
}

printOutput(output){
  let field = document.querySelector('#output');
  field.innerHTML = `<style>div{overflow-wrap: break-word;}</style>
                    <div>${output({
                        min: this.fibMin,
                        max: this.fibMax})}</div>`;
}

ticketOutput(output){
  let field = document.querySelector('#output');
  field.innerHTML = `<style>div{overflow-wrap: break-word;}</style>
                    <div>${output({min:this.ticketMin, max:this.ticketMax})}</div>`;
}

palindromeOutput(output){
  let field = document.querySelector('#output');
  field.innerHTML = `<style>div{overflow-wrap: break-word;}</style>
                    <div>${output(this.stringPalindrome)}</div>`;
}

printOutputSort(output, object){
  let field = document.querySelector('#output');
  field.innerHTML = `<style>div{overflow-wrap: break-word;}</style>
                    <div>${output(object)}</div>`;
}

printOutputStrict(output){
  let field = document.querySelector('#output');
  field.innerHTML = `<pre>${output(this.chessWidth, this.chessHeight, this.chessSymbol)}</pre>`;
}

printOutputEnvelope(output){
    let field = document.querySelector('#output');
    field.innerHTML = `${output({a: this.aSide, b: this.bSide}, {c: this.cSide, d: this.dSide})}`;
  }

}
