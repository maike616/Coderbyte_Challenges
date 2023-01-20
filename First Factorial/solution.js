function FirstFactorial(num) { 
    if(num == 1){
      return 1
    }
    return num * FirstFactorial(num-1);
  }
     
  // keep this function call here 
  console.log(FirstFactorial(readline()));