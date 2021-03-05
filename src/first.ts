export default class Loger {
  constructor(private string: string) {
    this.string = string;
  }
  log(string: string) {
    console.log(string);
  }
}
