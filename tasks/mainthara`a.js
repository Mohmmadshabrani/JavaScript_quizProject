////////////////

//task 15//

function iseven (num){
    if (num % 2==0)
  {
    return true;
  }
    else{
        return false;
      }
  }
  console.log(iseven(4));
  
  
  
  
  
  //task 16//
  
  function isodd (num){
    if (num % 2 !==0){
      return true;
    }
    else{
        return false;
      }
  }
  console.log(isodd(4));
  
  
  ////////////////
  
  
  //task 17//
  function positive(num) {
    if (num > 0){
      return true;
    }
    else{
        return false;
      }
  }
  console.log(positive(4));

  


  //task 18//

  function fullName(firstName , lastName) {
    return firstName + " " + lastName;
  }
  console.log(fullName("John", "cena"));