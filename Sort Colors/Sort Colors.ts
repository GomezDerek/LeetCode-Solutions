/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // in place sort an array with nums [0,2], without library sort
    // so I have to write a sorting algorithm...

    // bubble sort O(n^2) 👎

    // qualifies as in-place when constant extra space is used
    // variables for amount of red, white, blue
    // + 2 pointers
    // because we know the range of values never changes,
    // we can sort the ends, and move towards the middle
    // min is always 0, max is always 2

    // array operations are O(N)
    // reassigning values of indices O(1)

    // edge cases
    // does nums input always have all values [0,1,2]?

    // strategy
    // track left and right pointers
    // iterate left pointer with a loop
        // if left val is 2 && 2 > right
            // swap left/right values
        // else if left val is 2 && 2 < right
            // right --
            // repeat until right == left (sorted!)
            // we can swap left/right pointers
        
        // else if left is 0 && left-1 is 1
            // new left
            // while 👆
                // swap left and new left
                // new left--
        
        // if 1, don't do anything lol

    // notes: include bounds for while loops

    // nl l  r
    // 0, 1, 2, 2

    // left & right pointers
    let l:number = 0;
    let r:number = nums.length-1;

    // iterate left pointer with a loop
    while (l <= r) {
        // if l is 2
        if (nums[l] === 2) {

            // r < 2
            if (nums[r] < 2) {
                // swap left and right values
                let temp:number = nums[l];
                nums[l] = nums[r];
                nums[r] = temp;
                r--;
            }
            // r == 2
            else if (nums[r] === 2) {
                r--;
            }
        }

        // if l is 0
        else if (nums[l] === 0) {
            // so we don't change the l pointer
            let nl:number = l;
            
            // while l > l-1
            while(nl>=0 && nums[nl] < nums[nl-1]) {
                // swap
                let temp:number = nums[nl-1];
                nums[nl-1] = nums[nl];
                nums[nl] = temp;
                
                nl--;
            }
            l++;
        }

        // if l is 1
        else if (nums[l] === 1) l++;
    }
};