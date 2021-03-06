export function calc(inputVal, factor) {
  return (parseFloat(inputVal) * parseFloat(factor)).toFixed(2);
}

export class Database {
  constructor() {
    this.curKey;
    this.conFactor;
    this.keyArray;
  }

  static databaseNew(response, newCur) {
    let curKey = Object.entries(response.conversion_rates);
    let keyArray = [];
    for (let i = 0; i < curKey.length; i++) {
      keyArray.push(curKey[i][0]);
    }
    this.keyArray = keyArray;
    for (let i = 0; i < curKey.length; i++) {
      if (keyArray.includes(newCur)) {
        if (newCur === curKey[i][0]) {
          this.conFactor = curKey[i][1];
          this.curKey = curKey;
        }
      } else {
        this.conFactor = "invalidCur";
        this.curKey = curKey;
      }  
    }
  }

  static databaseOld(newCur) {
    for (let i = 0; i < this.curKey.length; i++) {
      if (this.keyArray.includes(newCur)) {
        if (newCur === this.curKey[i][0]) {
          this.conFactor = this.curKey[i][1];
        }
      } else {
        this.conFactor = "invalidCur";
      } 
    }
  }
}