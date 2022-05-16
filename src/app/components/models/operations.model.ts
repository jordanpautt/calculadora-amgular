export class Operation {
  protected valor1: number;
  protected valor2: number;
  protected operating: string;
  protected response: number | string;

  constructor(valor1: number, valor2: number, operating: string) {
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.operating = operating;
  }

  public get Response(): number | string {
    return this.response;
  }
}
