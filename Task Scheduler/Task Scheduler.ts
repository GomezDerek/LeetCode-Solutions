function leastInterval(tasks: string[], n: number): number {
    let curInterval: number = 0;

    // calc task frequencies
    const freqMap: {[key: string]: number} = {};
    for (const task of tasks) {
        freqMap[task] = (freqMap[task] ?? 0) + 1;
    }

    // initialize heap
    const heap = new MaxPriorityQueue<string>(
        task => freqMap[task],
        Object.keys(freqMap)
    );

    const coolDown: {[key: string]: number} = {}; // {task: intervalReady}
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
            while (hotTasks.length) heap.enqueue(hotTasks.pop());
            heap.enqueue(nextTask);
            curInterval++;
            continue;
        }

        // process ready task
        coolDown[nextTask] = curInterval + n + 1;
        freqMap[nextTask]--;
        
        // handle hot tasks and heap
        while (hotTasks.length) heap.enqueue(hotTasks.pop());
        if (freqMap[nextTask] > 0) heap.enqueue(nextTask);
        
        curInterval++;
    }

    return curInterval;

    // hoisted helpers
    function isReady(task: string): boolean {
        return (coolDown[task] ?? 0) <= curInterval;
    }
};