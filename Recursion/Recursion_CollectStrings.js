function collectStrings(obj) {
    let stringArr = [];

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            stringArr.push(obj[key]);
        } else if (typeof obj[key] === 'object') {
            stringArr = stringArr.concat(collectStrings(obj[key]))
        }
    }

    return stringArr;
}

const object = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(object) // ["foo", "bar", "baz"])