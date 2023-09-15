console.log('hi!');
function sleepIn(weekday, vacation){
   return !weekday || vacation;
  
}
function monkeyTrouble(aSmile, bSmile){
  trouble =  false;
  if (aSmile == true && bSmile == true || aSmile == false && bSmile == false){
    trouble =  true;
  } 
  return trouble;
}
function sumDouble(a, b){
   if (a == b){
     return 2(a+b);
   }
  return a + b;
  
}

function frontBack(str){
  if (str.length <= 1){
    return str;
  }
  let first = str[0];
  let last = str[str.length - 1];
  let sub = str.substring(1,str.length - 1)
  let new_str = last + sub + first;
  
  return new_str;
  
}
function intMax(a, b, c){
  let greater; 
  if (a > b){
    greater =  a;
  } else if (b > a){
    greater =  b;
  }
  if (greater > c){
    return greater;
  }
  return c;
  
  
}
function arrayCount9(nums){
  let count = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] == 9){
      count++;
    }
  }
  
  return count;
  
}
function array667(nums){
  
  let count = 0;
  for (let i = 0; i < nums.length; i ++){
    if (nums[i] == 6 && (nums[i+1] == 6 || nums[i+1] == 7)){
      count++;
    }
    lastone = i;
    
  }
  return count;
  
}
function squirrelPlay(temp, isSummer){
  if (isSummer){
    if (temp >= 60 && temp <= 100){
      return true;
    }
  }
  if (temp >= 60 && temp <= 90){
      return true;
    }
  return false;
  
}
function withoutDoubles(die1, die2, noDoubles){
  let sum = die1 + die2;
  if (noDoubles && die1 == die2){ 
    let newval = 0
    if (die1 == 6){
      newval = 1;
      sum = die2 + newval;
      return sum;
    }
    newval = die2 + 1;
    sum = die1 + newval
    return sum;
   }
  return sum;
  }
  
  function greenTicket(a, b, c){
  
  if (a == b){
    if (b == c){
      return 20;
     }
    if (b != c){
      return 10
    }
  }
  if (a != b){
    if (a == c){
      return 10;
    }
    if (b != c){
      return 0;
    }
  }
  
  return 10;
     
}
function blackjack(a, b){
  if (a > 21 && b > 21){
    return 0;
  }
  
  if (a > 21){
    return b;
  }
  
  if (b > 21){
    return a;
  }
  
  let difference_a = 21 - a;
  let difference_b = 21 - b
  
  if (difference_a < difference_b){
    return a;
  }
  
  return b;
  
}

function makeChocolate(small, big, goal){
  let t_large = big*5;
  let count = 0;
  let t_total = small + t_large;
  if (t_total < goal){
    return -1;
  }
  let howless = goal - t_large;
  
  while (howless < goal){
    count += 1;
    t_large += 1;
  }
  
  return count;
  
  
  
}
