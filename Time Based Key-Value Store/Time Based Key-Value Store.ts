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
    keys: Map<string, Map<number, string>>;
    constructor() {
        this.keys = new Map<string, Map<number, string>>();
    }

    set(key: string, value: string, timestamp: number): void {
        // key already exists
        if ( this.keys.has(key) ) {
            // assume immutability
            // add in new timestamp + value
            const timeStampMap = this.keys.get(key);
            timeStampMap.set(timestamp, value);
        }
        // key DNE
        else {
            // create timestamp map
            const newTimeStampMap = new Map<number, string>();
            newTimeStampMap.set(timestamp, value);

            // assign new timestamp map to key
            this.keys.set(key, newTimeStampMap);
        }
        // console.log(this.keys);
    }

    get(key: string, timestamp: number): string {
        // console.log(`get ${key}, ${timestamp}`);
        // console.log(this.keys);
        const timestamps = this.keys.get(key); // assume if key DNE, .get() returns undefined
        if (timestamps == undefined) return ""; // key DNE

        // 1 <= timestamp <= 10^7
        let value: string;
        while( timestamp > 0 ) {
            value = timestamps.get(timestamp);
            if (value != undefined) return value;
            else timestamp--;
        }
        // unsure if this last return is necessary
        // console.log('\tno valid timestamp + value ever found');
        return "";
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */