// Problem:
// Given an array and a target number, find the indices of the two values from the array that sum up to the given target number.
//
// Notes:
//
// The function returns an array of size two where the two elements specify the input array indices whose values sum up to the given target number.
// In case when no answer exists, return an array of size two with both values equal to - 1, i.e., [-1, -1].
// In case when multiple answers exist, you may return any of them.
// The order of the returned indices does not matter.
// A single index cannot be used twice.

// Example One
// { "numbers": [5, 3, 10, 45, 1], "target": 6 }
// Output:
// [0, 4]
// Sum of the elements at index 0 and 4 is 6.

// Example Two
// { "numbers": [4, 1, 5, 0, -1], "target": 10 }
// Output:
// [-1, -1]

function getIndicesOfTargetSum(array, target) {
    let returnArray = [-1, -1];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let value1 = array[i];
            let value2 = array[j];

            if (value1 + value2 == target) {
                returnArray[0] = i;
                returnArray[1] = j;
                return returnArray;
            }
        }
    }
    return returnArray;
}

var array1 = [5, 3, 10, 45, 1];
var target1 = 6;

var array2 = [4, 1, 5, 0, -1];
var target2 = 10;

console.log("Output 1: " + getIndicesOfTargetSum(array1, target1));
console.log("Output 2: " + getIndicesOfTargetSum(array2, target2));
