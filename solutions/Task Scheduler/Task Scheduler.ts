/**
GOAL: to calc least amount of time to complete all tasks

NOTES:

STRAT:
    - prioritize which task is next between intervals
    - before an idle turn, we need to be certain no tasks can be performed
    - find frequency for each task
    - heap DS, maintain a priority queue
        - sort function, by frequency
    - store cooldown for each task {task: intervalReady}
    - loop, while heap is not empty
        - pop next available task from heap
        - store hot tasks in a temp array
        - when we find a task that is cold
            - process
            - add back in hot tasks, heap([hotTasks])
        - update counters (time, interval)

 */

function leastInterval(tasks: string[], n: number): number {
    let curInterval: number = 0;

    // calc frequencies
    const freqMap: {[key: string]: number} = {};
    for (const task of tasks) {
        freqMap[task] = (freqMap[task] ?? 0) + 1;
    }
    // console.log(freqMap);

    // const heap = new PriorityQueue<string>(
    const heap = new MaxPriorityQueue<string>(
        // (a,b) => freqMap[b]-freqMap[a], 
        // (a, b) => a - b
        // null,
        // freqMap => freqMap,
        task => freqMap[task],
        Object.keys(freqMap)
    );
    // console.log(heap.toArray());
    // console.log(heap);

    // {task: intervalReady}
    const coolDown: {[key: string]: number} = {};

    const hotTasks: string[] = [];
    while (!heap.isEmpty()) {

        // get next task
        let nextTask: string = heap.dequeue();

        while (!isReady(nextTask) && !heap.isEmpty()) { // while nextTask is hot
            hotTasks.push(nextTask);
            nextTask = heap.dequeue();
        }

        // no tasks ready, idle interval
        if (heap.isEmpty() && !isReady(nextTask)) {
            // console.log(curInterval + ": idle");
            while (hotTasks.length) heap.enqueue(hotTasks.pop());
            heap.enqueue(nextTask);
            curInterval++;
            continue;
        }

        // process task
        coolDown[nextTask] = curInterval + n + 1;
        freqMap[nextTask]--;
        
        // handle hot tasks and heap
        while (hotTasks.length) heap.enqueue(hotTasks.pop());
        if (freqMap[nextTask] > 0) heap.enqueue(nextTask);
        console.log(curInterval + ": " + nextTask);
        // console.log(heap.toArray());
        
        curInterval++;
    }

    return curInterval;

    // hoisted helpers
    function isReady(task: string): boolean {
        return (coolDown[task] ?? 0) <= curInterval;
    }
};