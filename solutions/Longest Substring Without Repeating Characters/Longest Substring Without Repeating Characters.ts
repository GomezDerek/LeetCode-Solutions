/**
STRATEGY:
    sliding window
    iterate with 2 pointers,
        one for beginning 
        one for end
    use a set to track which chars are in the window
    when a duplicate is found, 
        iterate left pointer until duplicate is removed
 */

function lengthOfLongestSubstring(s: string): number {
    let longest: number = 1;
    const set: Set<string> = new Set<string>();

    let [l,r] = [0,1];
    set.add(s[0]);
    while (r < s.length) {
        // first verify window and adjust if needed
        if (set.has(s[r])) {
            // move left pointer to duplicate, and remove from set as we go
            while (s[l] !== s[r]) {
                set.delete(s[l]);
                l++;
            }
            // l now at duplicate
            l++;
        }
        else set.add(s[r]);

        // window is now valid
        longest = Math.max(longest, r-l+1);

        // iterate r
        r++;
    }

    return longest;
};