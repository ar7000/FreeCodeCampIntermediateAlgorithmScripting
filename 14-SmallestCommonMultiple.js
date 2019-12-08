function smallestCommons(arr) {
  
    function isMultiple(num, den){
      if(num % den === 0){
        return true;
      }
      return false;
    }
    
    arr.sort((a,b) => a-b);
  
    let numsBetween = [];
    for(let i = arr[0] + 1; i < arr[1]; i++){
      arr.push(i);
    };
  
    return arr;
  
  }
  
  
  console.log(smallestCommons([1,5]));
  