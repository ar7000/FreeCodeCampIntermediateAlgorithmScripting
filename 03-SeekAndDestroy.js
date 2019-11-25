function destroyer(arr) {
  
    let args = Array.from(arguments).slice(1);
  
    return arr.filter(x => !args.includes(x));
  
  }
  
  console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));  