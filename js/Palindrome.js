function minSwapForPalindrome (str) {
    const strArr = str.replace(/\s/g, "").split(''); // [m,a,m,a,d]

    if (!isPalindrome(freq)) {
        return -1;    
    }
    
    // if str length is even
    if (strArr.length % 2 === 0) {
        const indexDiff = findCharIndiceDiff(strArr);
        return indexDiff;
        
    } else {
        let { freq, oddLetter } = getFreqAndOddLetter(strArr);
        // freq = {m: 2, a: 2, d: 1 } && oddLetter = "d"

        // oddLetter Position
        const oddLetterPos = strArr.indexOf(oddLetter) + 1;
        const meanPos = Math.floor(strArr.length / 2);

        if (oddLetterPos > meanPos) {
            return oddLetterPos - meanPos;
        } else {
            return meanPos - oddLetterPos;
        }
    }
}
function getFreqAndOddLetter(strArr) {
    let freq = {};
    let oddLetter = undefined;
    for (let i in strArr) {
        const char = strArr[i];
        
        if (freq[char]) {
            freq[char]++;
            oddLetter = oddLetter === char ? undefined : char;
        } else {
            freq[char] = 1;
            oddLetter = char;
        }
    }

    return {
        oddLetter,
        freq,
    };
}

function isPalindrome(object) {
    let primeCount = 0;
    let evenCount = 0;
    for (key in object) {
        if (object[key] % 2 == 0) {
            evenCount++;
        } else {
            primeCount++;
        }
    }

    if ((primeCount === 0 || primeCount === 1 ) && evenCount % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Find sum of distance between first index of each char
function findCharIndiceDiff(arr) {
    let charTracked = [];
    let firstIndiceDiff = 0;

    for (i in arr) {
        const char = arr[i];
        if (charTracked.indexOf(char) === -1) {
            charTracked.push(char);
            firstIndiceDiff = Math.abs(firstIndiceDiff - i);
        }
    }

    return firstIndiceDiff;
}