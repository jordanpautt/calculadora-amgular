import { Operation } from './operations.model';
export class Subtract extends Operation {
  constructor(valor1: number, valor2: number) {
    super(valor1, valor2, '-');
    const subtract: number = valor1 - valor2;
    this.response = subtract;
  }
}
