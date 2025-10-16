/**
    GOAL: find the fastest time (in intervals) all tasks can be completed
    
    STRATEGY:
        - cooldown counter for each task, hashmap for O(1) access
        - iterate through tasks to initialize the hash counter O(n)

        - priority queue / heap for task completion O(n logn)
            - prioritize tasks with no / smallest cooldown
            - when there's a tie, prioritize most frequent tasks


    cooldownheap = [a:0, b:0, a:0, b:0, c:2]
    freqHeap = [idle]
    temp = [a:32, b:17, c:4]

    heap will sort based on frequency
    when choosing next task, 
        iterate through heap from most to least frequent
            store tasks on cooldown into temp arr
            until valid task is found
            IF NO VALID TASK, then idle
        
        after task is chosen,
            restore cooldown tasks

    USE GLOBAL interval counter to avoid in/decrement every tasks's cooldown      
 
    strat done at 15min
 */

function leastInterval(tasks: string[], n: number): number {
    let curInterval: number = 0;

    class Task {
        label: string;
        count: number;
        readyBy: number;
        constructor(label: string) {
            this.label = label;
            this.count = 1;
            this.readyBy = 0;
        }
        process() {
            this.count--;
            this.readyBy += n+1;
        }
    }

    // freqHash
    const hash: {[key: string]: Task} = {};
    for (const task of tasks) {
        if (hash[task] !== undefined) {
            hash[task].count +=1; 
        }
        else {
            hash[task] = new Task(task);
        }
    }
    // console.log(hash);

    // heap from hash
    const q: Heap<Task> = new Heap<Task>(
        task => task.count, // comparator
        Object.values(hash) // initial array
    );

    // process the tasks
    while(!q.isEmpty()) {
        const hotTasks: Task[] = [];
        
        // while next task is still on cooldown
        while (!q.isEmpty() && q.root().readyBy > curInterval) {
            hotTasks.push(q.extractRoot());
        }

        // now next task is ready OR no tasks are ready
        if (!q.isEmpty()) {
            if (q.root().count === 1) q.extractRoot();
            else q.root().process();
        }
        
        for (const task of hotTasks) q.insert(task);
        curInterval++;
    }

    return curInterval;
};