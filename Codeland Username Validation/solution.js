function CodelandUsernameValidation(str) { 
    let resultado = true
    let regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]{4,25}$/;
    if(str.match(regex)==null || str.length > 25){
      resultado = false;
    }
    return(resultado);
   }
      
   // keep this function call here 
   console.log(CodelandUsernameValidation(readline()));