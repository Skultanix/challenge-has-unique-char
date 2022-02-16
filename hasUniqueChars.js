// Write your code below
let uniqCheck = (aWord) => {
    // initial condition of function
    let uniqCheck =  false
    //make new set from the initial string
    const aWordSet = new Set(aWord)
    //make an array from a the initial string using spread
    let aWordArr = [...aWord]
    //compare the length of the array to the length of the set and return the value
    return aWordSet.size === aWordArr.length
  }
  
  console.log(uniqCheck('Monday'))