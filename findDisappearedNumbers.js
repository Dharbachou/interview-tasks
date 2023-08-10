/*
Given an array of positive integers from 1 to n, where n is the size of the array, 
find the missing numbers if any numbers can only appear in the array at most twice.

For example, If the input is [1, 2, 2], the output should be [3].
*/

function findDisappearedNumbers(nums) {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]);
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}
