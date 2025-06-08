/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    
    // fleet obj
    const Fleet = function(pos,spd, time) {
        this.pos = pos;
        this.spd = spd;
        this.time = time;
    }

    const fleets = [];

    for (let i=0; i<position.length; i++) {
        const pos = position[i];
        const spd = speed[i];
        const time = (target - pos)/spd;

        fleets.push( new Fleet(pos, spd, time) );
    }

    fleets.sort( (a,b) => b.pos - a.pos ); // sort in descending position
 
    let endingFleets = [];

    fleets.forEach( currFleet => {
        if (endingFleets.length == 0) endingFleets.push(currFleet);

        // else if no collision
        else if (currFleet.time > endingFleets[endingFleets.length-1].time) {
            endingFleets.push(currFleet);
        }

    });

    return endingFleets.length;
};