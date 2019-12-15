Working through Intermediate Algorith Scripting via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn.

- Learned to use Array.from() method to create an array-like object, such as arguments passed to a function. Example:
```
const testFunc = () => {
  
  let args = Array.from(arguments).slice(1);

  return args;

}

console.log(testFunc(1,2,3)); //Would log [1,2,3] to console

```

    - Useful when looking to check if any of the given arguments are present in an array and if so act on them. Example:
    ```
    function destroyer(arr) {
  
    let args = Array.from(arguments).slice(1);

    return arr.filter(x => !args.includes(x));

    }

    console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //Would log [1] to console.

    ```


*Little to report on this module as mainly consists of completing tasks based on what has already been learned.*