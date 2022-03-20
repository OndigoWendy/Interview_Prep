/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    	

    let len = 0;

    // Return max length possible
    for(let i = 0; i < arr.length; i++)
    {
        len = len > arr[i].length ? len : arr[i].length;
    }

    // Return the answer
    return len;

};