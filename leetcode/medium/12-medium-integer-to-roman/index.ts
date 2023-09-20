function intToRoman(num: number): string {
    let result = "";
    let digits = String(num).split("").reverse().map((v) => Number(v));

    let values = [
        ["I", "V", "X"],
        ["X", "L", "C"],
        ["C", "D", "M"],
        ["M"]
    ]

    for (let i = digits.length - 1; i >= 0; i--) {
        let index = (i >= 3) ? 3 : i;
        let possibleValues = values[index];
        let x = digits[i];

        if (i < 3) {
            if (x == 4) result += possibleValues[0] + possibleValues[1];
            else if (x == 5) result += possibleValues[1];
            else if (x == 9) result += possibleValues[0] + possibleValues[2];
            else {
                if (x > 5) {
                    result += possibleValues[1];
                    x -= 5;
                }

                while (x > 0) {
                    result += possibleValues[0];
                    x -= 1;
                }
            }
        }
        else {
            while (x > 0) {
                result += possibleValues[0];
                x -= 1;
            }
        }
    }

    return result;
};

function intToRoman2(num: number): string {
    let result = "";

    let symList: [string, number][] = [
        ["I", 1], ["IV", 4], ["V", 5], ["IX", 9],
        ["X", 10], ["XL", 40], ["L", 50], ["XC", 90],
        ["C", 100], ["CD", 400], ["D", 500], ["CM", 900],
        ["M", 1000]
    ];
    symList = symList.reverse();

    for (let [sym, value] of symList) {
        let division = parseInt((num / value).toString())
        if (division > 0) {
            result += sym.repeat(division);
            num = num % value;
        }
    }

    return result;
}

console.log(intToRoman2(58));