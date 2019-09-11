
class Calculator {

  constructor() {
  }

  sum(a,b) {
    return a+b
  }


  multiplication(a,b){
    return a*b
  }


  multiplicationWithExceptionHandling(a,b){
    if(typeof(a) !== 'number' || typeof(b) !== 'number')
      throw new TypeError('multiplication expects only numbers.')
    return a*b
  }


}


export default Calculator;