  // const given = 'a5b2c3';
  const given = 'a1b0c4';
  // const given = '2a2b1c';
   
  //  print_string(given);
  // function to print alpha with the corresponding number times
  function print_string(param){
    const string = param;
    let finalResult = '';
    let toprint = '';
    for(i=0;i<string.length;i++){
        const result = string[i]%1;
        if(result !=0){
           toprint = string[i];
        }
        if(result==0){
          for(j=1;j<=string[i];j++){
                finalResult += toprint;
          }
        }
    }
    console.log(finalResult);
    // return finalResult;
  }

  // const test_string = "12d6g4h";
  const test_string = "a5b2c3";

  function printntimes(params){
          const givenString = params;
      // seperate number ad alphabet make it as two array
          const alphabet=[];const numbers = []; let num="";
      for(let i=0;i<givenString.length;i++){
              evalResult = givenString[i]%1;
              if(evalResult==0){
                num +=givenString[i];
              }else{
                 alphabet.push(givenString[i]);
                 if(num !="")
                  numbers.push(Number(num));
                  num="";
                  
                

              }
      }

          // const result = {alphabet,numbers};
          return ()=>{
            // console.log(alphabet,numbers);
              let resultString="";
            for(let i=0;i<alphabet.length;i++){
                  for(let j=0;j<numbers[i];j++){
                    resultString += alphabet[i];
                  }
            }
              return resultString;
          }
          
      return result;

  }

  console.log(printntimes(test_string)());
  // console.log(printntimes(test_string));
 