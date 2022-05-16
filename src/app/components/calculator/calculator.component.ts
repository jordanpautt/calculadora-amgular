import { Component, OnInit } from '@angular/core';
import { Sum } from '../models/sum.model';

interface ButtonList {
  type: string;
  value: string;
}

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
  operatorText: string = '';
  resultF: number;

  buttonList: Array<ButtonList> = [
    {
      type: '1',
      value: '1',
    },
    {
      type: '2',
      value: '2',
    },
    {
      type: '3',
      value: '3',
    },
    {
      type: 'divide',
      value: '/',
    },
    {
      type: '4',
      value: '4',
    },
    {
      type: '5',
      value: '5',
    },
    {
      type: '6',
      value: '6',
    },
    {
      type: 'multiply',
      value: 'x',
    },
    {
      type: '7',
      value: '7',
    },
    {
      type: '8',
      value: '8',
    },
    {
      type: '9',
      value: '9',
    },
    {
      type: 'subtract',
      value: '-',
    },
    {
      type: 'c',
      value: 'c',
    },
    {
      type: '0',
      value: '0',
    },
    {
      type: '=',
      value: '=',
    },
    {
      type: 'sum',
      value: '+',
    },
  ];

  buttonFunction = {
    multiply: (a: number, b: number) => a * b,
    sum: (a: number, b: number) => a + b,
    subtract: (a: number, b: number) => a - b,
    divide: (a: number, b: number) => {
      let result = 0;
      if (b !== 0) {
        result = a / b;
      } else {
        alert('no puedes dividir por cero');
      }
      return result;
    },
  };

  constructor() {}

  ngOnInit(): void {}

  setValueCalculator({ type, value }: ButtonList): void {
    if (Number(value) || Number(value) === 0) {
      this.textInput += value;
    } else {
      if (value !== '=' && value !== 'c' && !this.operator) {
        this.value1 = +this.textInput;
        this.operator = type;
        this.operatorText = value;
        this.textInput = '';
      }
      if (value === '=' && this.value1 && this.operator) {
        this.value2 = +this.textInput;
        this.resultF = this.buttonFunction[this.operator](
          this.value1,
          this.value2
        );
        this.textInput = '';
      }
      if (value === 'c') {
        this.textInput = '';
        this.value1 = null;
        this.value2 = null;
        this.resultF = null;
        this.operator = '';
        this.operatorText = '';
      }
    }
  }
}
