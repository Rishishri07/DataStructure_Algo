function numCompare(num1, num2) {
    return num1 - num2;
}

[4,2,8,1,7].sort(numCompare);

function stringLengthCompare(str1, str2) {
    return str1.length - str2.length;
}

['Rishi', 'Iti', 'Kriti', 'Shresth'].sort(stringLengthCompare);