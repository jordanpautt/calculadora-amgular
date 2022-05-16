import { Operation } from './operations.model';

export class Sum extends Operation {
  constructor(valor1: number, valor2: number) {
    super(valor1, valor2, '+');
    const sum: number = valor1 + valor2;
    this.response = sum;
  }
}
