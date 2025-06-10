/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

/*
GOAL: 
    make a deep copy of a connected, undirected graph
    (provided as an adjacency list)

NOTE:
    a node's value is its index in the adj list (1-indexed)

STRATEGY:
    BFS graph traversal, with queue (FIFO)
    use a hashmap for cloned nodes {og_node: cloned_node}

    for each node,
        create a clone
        when we check og_neighbors,
            if neighbor clone exists,
                connect clone with neighbor (both ways)
            else neighbor clone DNE
                add to BFS queue
*/

var cloneGraph = function(node) {
    if (node === null) return null; // handle empty graphs
    
    const hash = {}; // { og_node.val: cloneNode }

    let front = 0;
    const q = [node];

    while (front < q.length) {
        const og = q[front++]; // pop node from front of q

        // create clone if DNE yet
        if (hash[og.val] == undefined) hash[og.val] = new _Node(og.val);
        const clone = hash[og.val];

        // check og's neighbors
        og.neighbors.forEach(ogN => {
            // if neighbor clone DNE yet
            if (hash[ogN.val] == undefined) {
                hash[ogN.val] = new _Node(ogN.val); // create clone
                q.push(ogN); // push to BFS queue
            }
            const nClone = hash[ogN.val];

            // connect og's clone to neighbors' clones
            clone.neighbors.push(nClone);       
        });
    }

    return hash[node.val]; // return clone of the give node
};