function countNum(num) {

    if (num <= 0) {
        console.log("Done!");
        return;
    }
    console.log(num);
    num--;
    countNum(num);

}

console.log(countNum(5));