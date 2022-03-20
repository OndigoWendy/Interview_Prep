const sumZero = function (n) {
    let current = 0
    const result = []
    const negativeCount = Math.floor(n / 2)
    for (let i = negativeCount; i >= 1; i--) {
      result.push(-i)
      current += -i
      console.log(result)
    }
    for (let i = 1; i < n - negativeCount; i++) {
      current += i
      result.push(i)
      
    }
    result.push(0 - current)
    return result
    
   
  }
 