function fibbonocci(num, memo=[]) {
    if (memo[num] !== undefined) return memo[num];
    if (num <= 2) return 1;
    let res = fibbonocci(num - 1) + fibbonocci(num - 2);
    memo[num] = res;
    return res;
}

function displayFibonacciSequence(num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += fibbonocci(i) + ' ';
    }
    console.log(result);
}

displayFibonacciSequence(5);