/*
MY UNDERSTANDING
    keys have different values, at different time stamps
    set(key, value, timestamp) = key + timestamp -> value

    get(key, timestamp): value
    if there is no value at that timestamp, return the most previous
    e.g. get(key,5), check timestamp = 5, then 4, then 3, ...

STRATEGY

2*10^5 calls made means we need better than O(n^2) setting and getting
assume timestamps are "strictly increasing", means no duplicates

use a nested hashmap, assuming there can be multiple values for a single key+timestamp
{key: {timestamp: [values]} }

when getting, 
    check if key exists,
    check if timestamp exists,
        if DNE
            turn timestamp dict into array
            while timestamp DNE
                linear iteration backwards to find most prev timestamp

*/
class TimeMap {
    keys: Map<string, [number, string][]>;
    constructor() {
        this.keys = new Map<string, [number, string][]>();
    }

    set(key: string, value: string, timestamp: number): void {
        // key already exists
        if ( this.keys.has(key) ) {
            // assume immutability
            // add in new timestamp + value
            const timeStamps = this.keys.get(key);
            // timeStamps[timestamp] = value;
            timeStamps.push([timestamp, value]);
        }
        // key DNE
        else {
            // create timestamp + val pair
            const timeRecord: [number, string] = [timestamp, value];

            // assign new timerecord to key
            this.keys.set(key, [timeRecord]);
        }
    }

    get(key: string, timestamp: number): string {
        const timeRecords = this.keys.get(key); // assume if key DNE, .get() returns undefined
        if (timeRecords == undefined) return ""; // key DNE

        // use BSA to find key's value at timestamp
        let l: number = 0;
        let r: number = timeRecords.length-1;
        let m: number;
        let mostRecentVal: string = "";
        let curTimeStamp: number;
        while (l <= r) {
            m = Math.floor((l+r)/2);
            curTimeStamp = timeRecords[m][0];
            
            // timestamp found
            if (curTimeStamp == timestamp) return timeRecords[m][1];
            
            // curTimeStamp too late, look earlier
            else if (curTimeStamp > timestamp) {
                r = m -1;
            }

            // curTimeStamp too early, look later
            else if (curTimeStamp < timestamp) {
                mostRecentVal = timeRecords[m][1];
                l = m +1;
            }
        }
        return mostRecentVal;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */