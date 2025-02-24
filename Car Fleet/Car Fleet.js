var carFleet = function(target, position, speed) {
    // strategy
    // simulate car movement by iteratively updating positions with respective speed
    // when positions overlap, combine
    
    // notes: input arrays are not sorted
    
    // use an ascending monotonic stack to track fleet positions
    // when iterating positions, combine fleets if currFleetPosition < prevFleetPosition
    
    const Fleet = function(pos, spd) {
        this.pos = pos;
        this.spd = spd;
    }
    
    const fleets = position.map( (p, i) => new Fleet(p, speed[i]) ); // fleets's elements store both position & speed of a fleet
    fleets.sort( (a,b) => a.position - b.position ); // sort in ascending by position

    const arrivedFleets = []; 

    while (fleets.length) { // while not all fleets have arrived yet
        
        // update all fleet positions
        for(let i=0; i<fleets.length; i++) {
            
            // if fleet has already met target, transfer fleets to arrivedFleets
            if ( fleets[i].pos >= target ) {
                arrivedFleets.push(fleets[i]);
                fleets.splice(i,1); 
                continue;
            }

            fleets[i].pos += fleets[i].spd; // update fleet position

            // combine fleets if they overlap
            if ( i>0 && fleets[i-1].pos >= fleets[i].pos ) {

                const currFleet = fleets[i]; // obj ref

                // combine fleets
                const prevFleetSpeed = fleets[i-1].spd;
                fleets.splice(i-1, 1); // in-place deletion of prev element; O(n)
                currFleet.spd = Math.min(currFleet.spd, prevFleetSpeed); // "The speed of the car fleet is the minimum speed of any car in the fleet"
            }
        }
        
    }
    
    return arrivedFleets.length;
};