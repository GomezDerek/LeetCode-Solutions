/*
    NOTES:
        tasks can be completed in any order

    STRATEGY:
        simulate CPU's task completion
        global interval counter ++ every interval
        hashmap to store cooldown for each label
        stack to backlog tasks on cooldown
        always check stack before moving onto next task

        NVM we shouldn't linear iterate. TASKS can be completed in any order
        use min priority queue, and prioritize based on cooldown
        still use turn counter
        still use hashmap to store cooldown
        priority queue will store objs {label: , getCurCoolDown: }
        time: O(tasks * log tasks)
        space: O(tasks)

    REVISION:
        We need to not only prioritize
*/


// algo
function leastInterval(tasks: string[], n: number): number {
    let curInterval: number = 0;
    const coolDowns: {[key: string]: number} = {};

    // create the frequency map
    const freqMap: {[key:string]: number} = {};
    for (const task of tasks) {
        freqMap[task] = 1 + (freqMap[task] || 0);
    }
    console.log(freqMap);

    // convert map to arr
    const taskFreqArr: [string, number][] = Object.entries(freqMap);
    taskFreqArr.sort((a,b) => b[1]-a[1]);
    console.log(taskFreqArr);

    // create the queue
    const q = new MinPriorityQueue<string>(getCoolDown);

    // fill the queue
    for (const [task, freq] of taskFreqArr) {
        for (let i=0; i<freq; i++) q.enqueue(task);
    }
    console.log(q.toArray());
    

    while (q.size() > 0) {
        // console.log(curInterval, q.front(), coolDowns[q.front()]??0);
        // take an idle interval
        if ( (coolDowns[q.front()]??0) > curInterval) {
            // console.log(curInterval, 'interval');
            curInterval++;
        }

        else { // execute task
            // console.log(curInterval, q.front());
            coolDowns[q.front()] = curInterval + n + 1;
            q.dequeue();
            curInterval++;
        }
    }
    
    return curInterval;

    // helper function - callback for priority queue
    // return the soonest interval the task can be executed
    function getCoolDown(label: string) {
        return coolDowns[label] ?? 0;
    }
};