/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
 var kthLargestNumber = function(nums, k) {
    for (var i = 0; i < k; i++) {
      var max_index = i,
        tmp = nums[i];
  
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[max_index]) {
          max_index = j;
        }
      }
  
      nums[i] = nums[max_index];
      nums[max_index] = tmp;
    }
  
    return nums[k - 2];
    
};
  
  console.log(kthLargestNumber([3,6,7,10], 4))
  console.log(kthLargestNumber([-10,-25,-47,-36,0], 1))