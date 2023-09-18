function myAtoi(s: string): number {
    let result = "";
    let isNegative = false;
    let signFind = false;
    let firstNumberFind = false;

    if (s.length == 0) return 0;

    for (let c of s) {
        let charValue = c.charCodeAt(0);
        if (c == " " && !signFind && !firstNumberFind) continue;

        else if (c == "-" || c == "+") {
            if (!signFind) {
                isNegative = c == "-";
                signFind = true;
            }
            else break;
        }

        else if ((charValue >= 48 && charValue <= 57) || c == ".") {
            if (result.length == 0) {
                firstNumberFind = true;
                result += (isNegative) ? "-" : "";
                signFind = true;
            }
            result += c;
        }

        else break;
    }

    if(result.length == 0) return 0;

    let x = parseFloat(result);
    if (x > 0x7FFFFFFF) x = 0x7FFFFFFF;
    else if (x < -0x80000000) x = -0x80000000;

    return x;
};

console.log(myAtoi(" + 413"));