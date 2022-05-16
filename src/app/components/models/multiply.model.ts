import { Operation } from './operations.model';
export class Multiply extends Operation {
  constructor(valor1: number, valor2: number) {
    super(valor1, valor2, '*');
    const multiply: number = valor1 * valor2;
    this.response = multiply;
  }
}
