/*
Учитывая массив целых чисел nums и целочисленное target значение, верните индексы двух чисел так, 
чтобы в сумме они составляли целевое значение. Вы можете предположить, что каждый вход будет иметь ровно 
одно решение, и вы не можете использовать один и тот же элемент дважды. Вы можете вернуть ответ в любом порядке.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var results = [];

    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        const index = nums.lastIndexOf(diff);
        if (index > 0 && index !== i) {
            results.push(i);
            results.push(index);
            break;
        }
    }

    return results;
};

**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    // If the difference is in the hashmap, return the indices.
    if (diff in hashmap) { // or, hashmap[diff] !== undefined
      return [hashmap[diff], i];
    }

    // Otherwise, add the current number to the hashmap.
    hashmap[nums[i]] = i;
  }

  return [];
};
