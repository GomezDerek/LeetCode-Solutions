/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // this solution was pair programmed with Luis
    // but we got stuck and I fixed it a few days later
    
    const s1Map = new Map();

    for (let c of s1) {

        if (!s1Map.has(c)) {
            s1Map.set(c, 1);
        }
        else {
            s1Map.set(c, s1Map.get(c) + 1)
        }
    }


    let left = 0;
    let subMap = new Map(s1Map);
    let counter = subMap.size;
    for (let right = 0; right < s2.length; right++) {
        const letter = s2[right];

        if (subMap.has(letter)) {

            subMap.set(letter, subMap.get(letter) - 1)
            if (subMap.get(letter) === 0) {
                counter--;
            }
            else if (subMap.get(letter) < 0) {
                //this is if occurs
                //when the count has reached out for the letter/
                //but might still be considered 


                //so we need to move left poitner adding the that letter back?

                //while the current letter count is less than 0 
                //increment left and increment the letter count 
                //until the letter count is greater than 0 
                // let leftLetter = s2[left]
                let leftLetter;
                while (subMap.get(letter) < 0) {
                    leftLetter = s2[left]
                    subMap.set(leftLetter, subMap.get(leftLetter) + 1)
                    if (subMap.get(leftLetter) == 1) counter++;
                    left++;
                }

                /*
                WHILE LOOP FIXES:
                    leftLetter is updated every loop
                    increment counter when leftLetter's count is incremented from 0
                */
            }
            if (counter === 0) {
                return true;
            }
        }
        else {
            subMap = new Map(s1Map);
            counter = subMap.size;
            left = right;
        }
    }

    return counter === 0
};