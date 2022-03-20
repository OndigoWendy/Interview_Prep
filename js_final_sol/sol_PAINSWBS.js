/**
 * @param {number[]} nums
 * @return {boolean}
 */
//Partition Equal Subset Sum
 var canPartition = function(nums) {
 
    const sum = nums.reduce((acc, number) => number + acc, 0)
    if (sum % 2 !== 0) {
      return false
    }
    const memo = {}
    const aux = (index, current = 0) => {
      memo[index] = memo[index] || {}
      if (memo[index][current] !== undefined) {
        return memo[index][current]
      }
      if (current > sum / 2) {
        return false
      }
      if (current === sum / 2) {
        return true
      }
      if (index > nums.length) {
        return false
      }
      memo[index][current] = aux(index + 1, current + nums[index]) || aux(index + 1, current)
      return memo[index][current]
    }
    return aux(0, 0)
  
  };