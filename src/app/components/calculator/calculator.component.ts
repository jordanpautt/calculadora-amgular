import { Component, OnInit } from '@angular/core';
import { Divide, Multiply, Subtract, Sum } from '../models';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  value1: number;
  value2: number;
  operator: string = '';
  textInput: string = '';
  resultF: number | string;

  buttonList: Array<string> = [
    '1',
    '2',
    '3',
    '/',
    '4',
    '5',
    '6',
    'x',
    '7',
    '8',
    '9',
    '-',
    'c',
    '0',
    '=',
    '+',
  ];

  constructor() {}

  ngOnInit(): void {}

  setValueCalculator(type: string): void {
    //preguntamos si es un numero lo sumamos al string textInput
    if (Number(type) || Number(type) === 0) {
      this.textInput += type;
    } else {
      // entonces es una funcion
      // entrara a este if si el tipo es +, x, -, o /
      if (type !== '=' && type !== 'c' && !this.resultF && !this.operator) {
        this.value1 = +this.textInput;
        this.operator = type;
        this.textInput = '';
      }

      //solo entra a este if si el type es igual = y ya hay valor1 y hay valor en el input
      if (type === '=' && this.value1 >= 0 && this.textInput && this.operator) {
        this.value2 = +this.textInput;
        this.textInput = '';
        this.caseOperations(this.operator);
      }

      //se cumplira esta condicion cuando el type sea igual a c
      //se limpiara todos los campos
      if (type === 'c') {
        this.operator = '';
        this.textInput = '';
        this.resultF = '';
        this.value1 = null;
        this.value2 = null;
      }
    }
  }

  //funcion que recibira que tipo de operacion de realizara
  //en cada caso se creara una instacia de la clase correspondiente
  caseOperations(type: string) {
    switch (type) {
      case '+':
        const sum = new Sum(this.value1, this.value2);
        this.resultF = sum.Response;
        break;

      case '-':
        const subtract = new Subtract(this.value1, this.value2);
        this.resultF = subtract.Response;
        break;

      case 'x':
        const multiply = new Multiply(this.value1, this.value2);
        this.resultF = multiply.Response;
        break;

      case '/':
        const divide = new Divide(this.value1, this.value2);
        this.resultF = divide.Response;
        break;

      default:
        break;
    }
  }
}
