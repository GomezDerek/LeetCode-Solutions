function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength: number = nums1.length + nums2.length;
    const halfLength: number = Math.floor(totalLength/2);

    // calc smaller array
    let a: number[] = nums1;
    let b: number[] = nums2;

    // assume a is smaller, and correct if assumption is wrong
    // UNLESS a is an empty array. A should NEVER be empty
    if ((a.length > b.length && b.length) || !a.length) {        
        a = nums2;
        b = nums1;
    }
    // console.log(a, b);

    let l: number = -1;
    let r: number = a.length;

    while (l <= r) {
        // console.log(l,r);
        // calc partiton for smaller
        let mid: number = Math.trunc((l+r)/2);

        // calc partition for bigger
        let j: number = halfLength - mid - 2;

        // right-most value in left partition in smaller array
        let aLeft: number = a[mid] != undefined ? a[mid] : -Infinity;

        // left-most value in right partition in smaller array
        let aRight: number = a[mid+1] != undefined ? a[mid+1] : Infinity;

        // right-most value in left partition in larger array
        let bLeft: number = b[j] != undefined ? b[j] : -Infinity;

        // left-most value in right partition in larger array
        let bRight: number = b[j+1] != undefined ? b[j+1] : Infinity;

        // console.log(aLeft, bLeft, aRight, bRight);

        if (aLeft > bRight) {// if invalid
            // l = mid + 1;
            r = mid -1;
        }
        else if (bLeft > aRight) { // or invalid
            // r = mid - 1;
            l = mid + 1;
        }
        else { // both valid
            // calc median
            if (totalLength % 2 == 0) { // even
                return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight))/2;
            }
            else { // odd
                // console.log(aLeft, bLeft, aRight, bRight);
                // return Math.min(aRight, bRight);
                // ☝️ revised bc in case of empty array, aLeft will always be median
                return bRight == Infinity ? aLeft : Math.min(aRight, bRight);
            }
        }
    }
    /*
    Pseudo-code:
calc/store total length
calc/store half length

calc smaller array
set left and right pointers to ends of smaller array

start our binary search
 calc middle/partition for smaller array
 calc mid/partition for larger array
 check if our partition is valid

 if smaller[middle] > larger[middle+1]
  else move left to mid + 1

 else if larger[middle] > smaller[middle+1]
  else move right to mid -1

 else partition is valid
  calculate the median
  if odd - then return min(smaller+1, larger+1)
  else even - then return (max(smaller or larger middle) + min(smaller+1, larger+1))/2





  if smaller[middle] <= larger[middle+1] && larger[middle] <= smaller[middle+1]
  calculate the median
        *consider out of bounds accesses



if(smaller[middle]> larger[middle+1]{
move left to the right mid +1
else {
move right to the left mid -1




    */    
};