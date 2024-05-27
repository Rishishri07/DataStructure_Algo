/** 
    Given 2 strings, write a function to determine if the 2nd string is an anagram of the 1st.
    An anagram is a word, phrase, or name formed by rearranging the letters of another,
    such as "CINEMA" formed from "ICEMAN".
**/
function validAnagrams(str1, str2) {

    // Apprach 1
    
    // if (str1.length !== str.length) return false;
    
    // let freqCount1 = {};
    // let freqCount2 = {};
    // const str1Array = [...str1];
    // const str2Array = [...str2];
   
    // str1Array.forEach((str) => {
    //     freqCount1[str] = (freqCount1[str] || 0) + 1;
    // });

    // str2Array.forEach((str) => {
    //     freqCount2[str] = (freqCount2[str] || 0) + 1;
    // });
    // console.log(freqCount1);
    // console.log(freqCount2);

    // for (let freqKey in freqCount1) {
    //     if (!(freqKey in freqCount2)) {
    //         return false;
    //     }

    //     if (freqCount1[freqKey] !== freqCount2[freqKey]) {
    //         return false;
    //     }
    // }
    // return true;

    // Apprach 2
    
    if (str1.length !== str2.length) return false;

    let lookup = {};

    for (let i = 0; i < str1.length ; i++) {
        let letter = str1[i];
        // if letter exists, increment otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    console.log(lookup);

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagrams('cinema', 'iceman');
