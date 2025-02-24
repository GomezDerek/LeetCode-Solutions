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
    fleets.sort( (a,b) => a.pos - b.pos ); // sort in ascending by position
    // console.log(fleets);

    const arrivedFleets = []; 

    while (fleets.length) { // while not all fleets have arrived yet
        
        // update all fleet positions
        let i=0;
        while (i<fleets.length) {

            // if fleet has already met target, transfer fleets to arrivedFleets
            if ( fleets[i].pos >= target ) {
                arrivedFleets.push(fleets[i]);
                fleets.splice(i,1); 
                continue;
            }

            // update fleet position
            fleets[i].pos += fleets[i].spd; 

            // combine fleets if they overlap (skip 1st element to avoid out of bounds)
            if ( i>0 && fleets[i-1].pos >= fleets[i].pos ) { 

                const currFleet = fleets[i]; // obj ref

                // combine fleets
                const prevFleetSpeed = fleets[i-1].spd;
                fleets.splice(i-1, 1); // in-place deletion of prev element; O(n)
                currFleet.spd = Math.min(currFleet.spd, prevFleetSpeed); // "The speed of the car fleet is the minimum speed of any car in the fleet"
            
                continue;
            }

            // only iterate index if neither of the above if statements execute
            i++;
        }
        // console.log('Updated fleet:');
        // console.log(fleets);
    }
    
    return arrivedFleets.length;
};