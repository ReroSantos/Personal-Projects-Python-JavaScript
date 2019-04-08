// Built a dictionary containing unique values
const distinct_numerals_step1 = new Map([[1,'I'], [5,'V'], [10,'X']]);
const distinct_numerals_step2 = new Map([[1,'X'], [5,'L'], [10,'C']]);
const distinct_numerals_step3 = new Map([[1,'C'], [5,'D'], [10,'M']]);

function romanNumeral(num){
  let power = Math.floor(Math.log10(num));
  let holder = num.toString();
  let container = ''
  
  for(let letter of holder){
    if (power%3 === 0 && power === 0){
      if (Number(letter) === 5){
        container += distinct_numerals_step1.get(5);
    } else if (Number(letter) > 5){
        if (Number(letter) - 5 > 3){
          container += distinct_numerals_step1.get(1);
          container += distinct_numerals_step1.get(10);
      } else{
          container += distinct_numerals_step1.get(5);
          container += distinct_numerals_step1.get(1).repeat(Number(letter) - 5);
      }
    } else if(Number(letter) !==0){
        if(2 > (5 - Number(letter))){
          container += distinct_numerals_step1.get(1).repeat(5-Number(letter));
          container += distinct_numerals_step1.get(5);
      } else{
          container += distinct_numerals_step1.get(1).repeat(Number(letter));
      }
    }
  }
    
    if (power%3 === 1){
      if (Number(letter) === 5){
        container += distinct_numerals_step2.get(5);
    } else if (Number(letter) > 5){
        if (Number(letter) - 5 > 3){
          container += distinct_numerals_step2.get(1);
          container += distinct_numerals_step2.get(10);
      } else{
          container += distinct_numerals_step2.get(5);
          container += distinct_numerals_step2.get(1).repeat(Number(letter) - 5);
      }
    } else if(Number(letter) !==0){
        if(2 > (5 - Number(letter))){
          container += distinct_numerals_step2.get(1).repeat(5-Number(letter));
          container += distinct_numerals_step2.get(5);
      } else{
          container += distinct_numerals_step2.get(1).repeat(Number(letter));
      }
    }
  }
    
    if (power%3 === 2){
      if (Number(letter) === 5){
        container += distinct_numerals_step3.get(5);
    } else if (Number(letter) > 5){
        if (Number(letter) - 5 > 3){
          container += distinct_numerals_step3.get(1);
          container += distinct_numerals_step3.get(10);
      } else{
          container += distinct_numerals_step3.get(5);
          container += distinct_numerals_step3.get(1).repeat(Number(letter) - 5);
      }
    } else if(Number(letter) !==0){
        if(2 > (5 - Number(letter))){
          container += distinct_numerals_step3.get(1).repeat(5-Number(letter));
          container += distinct_numerals_step3.get(5);
      } else{
          container += distinct_numerals_step3.get(1).repeat(Number(letter));
      }
    }
  }
    
    if (power%3 === 0 && power !== 0){
      const holder1 = holder.substr(0,power-2);
      container += distinct_numerals_step3.get(10).repeat(Number(holder1));
      holder = holder.substr(-3);
  }
    
  power -= 1;
}
  return(container)
}

console.log(romanNumeral(88));
console.log(romanNumeral(888));
console.log(romanNumeral(8888));