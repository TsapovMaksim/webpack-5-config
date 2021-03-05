const obj1 = {
  geg: 2,
  geg1: 3,
};

const obj2 = {
  ...obj1,
  geg2: 4,
};

console.log(obj1, obj2);

class Loger {
  constructor(string) {
    this.string = string;
  }

  log() {
    const string = this.string;
    console.log(string);
  }
}

const loger = new Loger('Geges');
loger.log();
loger.log();
