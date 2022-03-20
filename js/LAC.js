
// JavaScript program to Find the Largest Alphabetic
    // Character present in the string of both
    // uppercase and lowercase English characters
     
    // Function to find the Largest Alphabetic Character
    function largestCharacter(str)
    {
        // Array for keeping track of both uppercase
        // and lowercase english alphabets
        let uppercase = new Array(26);
        uppercase.fill(false);
        let lowercase = new Array(26);
        lowercase.fill(false);
  
        let arr = str.split('');
  
        for (let c = 0; c < arr.length; c++) {
  
            if (arr == arr.toString().toLowerCase())
                lowercase[arr.charCodeAt() - 97] = true;
  
            if (arr == arr.toString().toUpperCase())
                uppercase[arr.charCodeAt() - 65] = true;
        }
  
        // Iterate from right side of array
        // to get the largest index character
        for (let i = 25; i >= 0; i--) {
  
            // Check for the character if both its
            // uppercase and lowercase exist or not
            if (uppercase[i] && lowercase[i])
                return String.fromCharCode(i +
                'A'.charCodeAt()) + "";
        }
  
        // Return -1 if no such character whose
        // uppercase and lowercase present in
        // string str
        return "-1";
    }
     
    let str = "AmdfkaMMM";
  
    console.log(largestCharacter(str));
 