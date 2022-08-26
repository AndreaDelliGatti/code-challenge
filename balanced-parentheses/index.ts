function balancedParentheses(str: string): boolean {
    let curly = 0;
    let par = 0;
    let square = 0;

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "(": par += 1; break;
            case ")": par -= 1; break;
            case "[": square += 1; break;
            case "]": square -= 1; break;
            case "{": curly += 1; break;
            case "}": curly -= 1; break;
        }
    }

    return curly == 0 && par == 0 && square == 0
}

console.log(balancedParentheses("((()){)}}{[]]"));