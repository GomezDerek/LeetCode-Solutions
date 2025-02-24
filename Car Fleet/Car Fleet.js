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

    fleets.sort( (a,b) => a.pos - b.pos );

    let endingFleets = 0;

    fleets.forEach( (currFleet, i) => {
        // if fleet will never catch up to next fleet
        // it will reach the target without merging
        const nextFleet = fleets[i+1];
        if ( !nextFleet || currFleet.time > nextFleet.time ) {
            endingFleets++;
        }
    });

    return endingFleets;
};