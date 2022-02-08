function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const sub = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === sub) {
        return true
      } 
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Take current integer, i, and subtract it from target. This will give us sub.
  Iterate through the remaining integers, j, and if j equals sub, return true, else false.
*/

/*
  Add written explanation of your solution here
  I need to create a function that takes two arguments, an array and a target. 
  I need to be able to find if any two integers in array will equal to the target.
  Take one integer and subtract that from the target to find the number we are looking for.
  Then iterate through the rest of the array to see if that number is present.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 10, 14, 16, 34, 42], 50));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5, 6], 9));
}

module.exports = hasTargetSum;