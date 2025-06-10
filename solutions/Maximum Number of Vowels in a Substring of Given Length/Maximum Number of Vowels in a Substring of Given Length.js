/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 /* 
  STRATEGY
  hashmap for vowels {vowel: true/false}
  sliding window, approach with fixed length of k
  as we iterate through s, slide the window
  with each iteration, calculate how many vowels are in the window

  external variable to track max_vowels
  update with each new window

 */
var maxVowels = function(s, k) {
    let maxVowels = 0;
    let currVowels = 0;

    const isVowel = {'a': true, 'e': true, 'i': true, 'o': true, 'u': true};

    let left = 0;
    let right = k-1;

    // calc num vowels in 1st substring of k length
    for (let i=left; i<=right; i++) {
        if ( isVowel[s[i]] ) currVowels++;
    }

    maxVowels = currVowels;

    // iteration to slide window
    for (let right=k; right<s.length; right++) {
        // update left
        if ( isVowel[ s[left] ] ) currVowels--;
        left++;

        // update right
        // for loop increments right
        // right++;
        if ( isVowel[ s[right] ] ) currVowels++;

        // window has been slid
        maxVowels = Math.max(currVowels, maxVowels);
    }

    return maxVowels;    
};