/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    // strategy
    // as we iterate through asteroids, build our stack
    // for each asteroid
    // check collision against stack.top() until it explodes, or they're in the same direction

    const stack = [];

    for (const astr of asteroids) {
        
        let astrExploded = false;

        // check for collisions
        while (stack.length && !astrExploded) {
            const top = stack[stack.length-1];

            // no collision
            if (top*astr > 0) break;

            // collision
            else {
                astrExploded = astr <= top;
                if ( Math.abs(top) <= Math.abs(astr) ) stack.pop();
            }
        }

        if (!astrExploded) stack.push(astr);
    }

    return stack
};