function reverse(x: number): number {
    let digits = x.toString().split("");
    let powerOfTen = 0;
    let result = 0;

    for (let i = (x < 0) ? 1 : 0; i < digits.length; i++) {
        let digit = parseInt(digits[i]);
        result += digit * Math.pow(10, powerOfTen);
        powerOfTen += 1;
    }
    
    if(result > 0x7FFFFFFF) return 0;

    if(x < 0) result *= -1;    
    return result;
};