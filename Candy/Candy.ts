/*
NOTES:
    runtime must be better than O(n^2)
    to determine how many candies a kid gets, we check neighbors' candies
    
    if we assign candies from left to right, would we need to cascade back down


EDGE CASES:
    if all ratings are the same, then all kids get 1 candy


NAIVE SIMULATION:
    [1,0,2]
     2 1 2

    [1,2,2]
     1 2 1

    [6,5,4,3,2,5,5,5]
     5 4 3 2 1 2 1 1

    [1,2,3,4,5,6]
     1 2 3 4 5 6

NAIVE STRATEGY:
    O(n^2)
    as we iterate linearly,
        if curRating > prevRating
            curCandies = prevCandies + 1
        if prevRating >= curRating
            curCandies = 1
            iterate backwards to increase prevRating's candies
            loop

OPTIMIZED STRATEGY:
    Monotonic decreasing stack O(n)
    as we iterate linearly,
        if curRating <= top
            pop through entire stack
                and recalc candies for popped
            then push cur to stack
        
        else curRating > top:
            calc curCandies
            reset stack
            push curRating to stack
    
    in plain English:
        as we iterate, build a monotonic stack

        if the current rating > the prev rating
            pop through the entire stack,
                calculate candies all prev neighbors
            reset the stack with only curr in it
            
            current candies is just prev + 1

        else
            add cur rating to the stack, and move on
    
    26 min of planning

*/

function candy(ratings: number[]): number {
    const stack: number[] = [0]; // will hold ratings indices
    const candies: number[] = new Array(ratings.length);

    for(let i=1; i<ratings.length; i++) {
    
        if (ratings[i] > ratings[i-1]) {
            // pop through the entire stack
            candies[i] = 0;
            let topIndex: number;
            while(stack.length > 0) {
                // calculate candies of all prev neighbors
                topIndex = stack.pop();
                candies[topIndex] = candies[topIndex+1] + 1;
            }

            // reset the stack with only curr in it
            stack.push(i);
        }
        else { // currentRating <= prevRating
            stack.push(i); // add cur rating to the stack, and move on
        }
    }


    // last kid/rating was larger than prev
    if (stack.length === 1) {
        candies[candies.length-1] = candies[candies.length-2] + 1;
    }

    // pop through the remainder of the stack
    else {
        candies[stack.pop()] = 1;
        
        // calculate candies of all prev neighbors
        let topIndex: number;
        while(stack.length > 0) {
            topIndex = stack.pop();
            candies[topIndex] = candies[topIndex+1] + 1;
        }
    }

    console.log(candies);
    return candies.reduce( (acc, num) => acc += num);
};