function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    /*
    OBSERVATIONS
    merging the arrays is O(m+n), which is too slow
    O(log m) + O(log n) = O(log (m+n)) ?
    No...
    
    O(log m) * O(log n) = O(log (m+n))
    No...
    
    O(log m) + O(log n) = O(log mn)
    Correct...

    O(log (m+n)) means we need to do BSA on the combined length

    nums1 and nums2 can have overlapping ranges

    STRATEGY
    2 situations:
    no overlap
    yes overlap

    in the test cases, you can get right answer from finding the avg of each array's median
    answer = (nums1Median + nums2Median)/2
    is it this easy...?

    nums1 = [10,11]
    nums2 = [1,2,3]
    median1 = 10.5;
    median2 = 2
    (10.5 + 2)/2 = 6.25
    WRONG

    refuted...

    finding the median of 1 array is O(1).
    if array.length %2 == 1, median = array[ FLOOR(length/2) ]

    nums1 = [1,6,100]
    nums2 = [2,80]
    median = 6

    Will I need to code a bunch of eddge cases?
    considering even vs odd lengths, and overlapping vs non-overlapping arrays

    if non-overlapping
    [nums1] + [nums2]
    median = (nums1.length + nums2.length)/2

    if overlapping...
    [ min(nums1[0], nums2[0]) ... max(nums1[-1], nums2[-1]]) ]

    how to confirm a median in an overlapping array?
    values < median == values > median
    THIS ☝️

    1st median = (min+max)/2
    lesserCount = 0
    greaterCount = 0
    l = min
    r = max
    while(lesserCount != greaterCount) {
        proposedMedian = (l+r)/2
        lesser1, greater1 = findPlaceInArray(proposed, arr1)
        lesser2, greater2 = findPlaceInArray(proposed, arr2)
        lesserCount = lesser1 + lesser2;
        greaterCount = greater1 + greater2

        if lesserCount > greaterCount {
            move right pointer
        }
        else if greaterCount > lesserCount {
            move left pointer
        }
    }
    // exit when we have equality
    return proposedMedian


    findPlaceInArray(val, arr) {
        lesser, greater
        //BSA
        l,r,m
        while(l <= r) {
            if arr[m] == val {
                lesser = m
                greater = length - lesser - 1;
            }
            if arr[m] < m < arr[m+1] {
                lesser = m + 1
                greater = length - lesser
            }
            else if m is too low
                move left pointer

            else i fm is too high
                move right pointer
        }
    }
    [1,1,2,3,3,5,7]
     0 1 2 3 4 5 6
    [1,3,5,7]
    [1,2,3]
     0 1 2
     len = 3
     m = 1
     lesser = 1
     greater = 1


    RESTART AT 2 HOURS
    just deleting everything and trying NC's solution after watching his explanation, but not code
    */
    
};