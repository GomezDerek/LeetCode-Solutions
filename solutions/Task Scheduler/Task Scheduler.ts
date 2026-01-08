function leastInterval(tasks: string[], n: number): number {
    let curInterval: number = 0;

    // calc task frequencies
    const freqMap: {[key: string]: number} = {};
    for (const task of tasks) {
        freqMap[task] = (freqMap[task] ?? 0) + 1;
    }

    const uniqueTasks: string[] = Object.keys(freqMap);

    // initialize task queue / heap
    const taskQ = new MaxPriorityQueue<string>(
        task => freqMap[task],
        uniqueTasks
    );

    const coolDown: {[key: string]: number} = {}; // {task: intervalReady}
    const hotTasks = new MinPriorityQueue<string>(
        task => coolDown[task] ?? 0
    );

    while (taskQ.size() || hotTasks.size()) {

        // first reset the taskQ
        while (hotTasks.size() && !isHot(hotTasks.front())) {
            taskQ.enqueue(hotTasks.dequeue());
        }

        // then pop taskQ until we find a ready task
        while (taskQ.size() && isHot(taskQ.front())) { 
            hotTasks.enqueue(taskQ.dequeue());
        }

        // process next task if possible
        if (taskQ.front()) {
            const nextTask: string = taskQ.dequeue();
            coolDown[nextTask] = curInterval + n + 1;
            if (--freqMap[nextTask]) hotTasks.enqueue(nextTask);            
        }
        // else idle

        curInterval++;
    }

    return curInterval;

    // hoisted helpers
    function isHot(task: string): boolean {
        return (coolDown[task] ?? 0) > curInterval;
    }
};