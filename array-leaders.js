//Given an array of integers, print the leaders in the array.
// A leader is an element which is larger than all the elements in the array to its right.
// For example:[ 98, 23, 54, 12, 20, 7, 27 ] →  Leaders- 27 54 98

function arrayLeaders(arr) {
    let max = Number.NEGATIVE_INFINITY;
    const leaders = [];
    for (let idx = arr.length - 1; idx >= 0; idx--) {
        if (arr[idx] > max) {
            leaders.push(arr[idx]);
            max = arr[idx];
        }
    }
    console.log(`Array Leaders are: ${leaders}`);
}

arrayLeaders([98, 23, 54, 12, 20, 7, 27]);
arrayLeaders([-1, 23, 22, 76, 20, 7, 0]);