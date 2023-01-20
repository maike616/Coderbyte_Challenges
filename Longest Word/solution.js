function LongestWord(sen) { 
    let maior = "";
     let palavras = sen.split(" ");
    for(let i = 0; i < palavras.length; i++){
      let palavra = palavras[i].replace(/[.,/#!$^&*;:{}=-_Â´~()]/g, "");
      if(palavra.length > maior.length){
        maior = palavra; 
      }
    }
    return maior; 
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));