import { Operation } from './operations.model';

export class Divide extends Operation {
  constructor(valor1: number, valor2: number) {
    super(valor1, valor2, '/');
    if (valor2 > 0) {
      const divide = valor1 / valor2;
      this.response = divide;
    } else {
      this.response = 'Syntax Error'
    }
  }
}
