function FindIntersection(strArr) { 
    const smallerArr =  arraySize(strArr[0].split(", "),strArr[1].split(", "))[0];
    const biggerArr =  arraySize(strArr[0].split(", "),strArr[1].split(", "))[1];
    let intersectionString = "";
    let output = false;
    for(let i = 0; i < biggerArr.length; i++){
      for(let j = 0; j < smallerArr.length; j++){
          if(biggerArr[i] == smallerArr[j]){
            intersectionString = intersectionString+ biggerArr[i]+",";
          }
      }
    }
    if(intersectionString == ""){
      output = false;
    }else{
      output =  intersectionString.slice(0, intersectionString.length-1)
    }
    return output;
    }
    
    function arraySize(arr, arr2){
     const size = arr.length;
     const size2 = arr2.length;
     let smallerArr = arr;
     let biggerArr = arr2
     if(size2 < size){
       smallerArr = arr2;
       biggerArr = arr;
     }
     return [smallerArr, biggerArr]
    }
       
    // keep this function call here 
    console.log(FindIntersection(readline()));