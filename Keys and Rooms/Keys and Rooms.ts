/*
GOAL: determine if all rooms can be visited

NOTES:
    always start at room 0
    at least 2 rooms

STRATEGY:
    use set to keep track of which rooms we've visited / unvisited
    room navigation is a directed graph. May have cycles
    traverse with DFS
    if rooms remain in set, than we can't visit all
*/

function canVisitAllRooms(rooms: number[][]): boolean {
    
    // init set
    const unvisited: Set<number> = new Set();
    for (let i=0; i<rooms.length; i++) unvisited.add(i);
    
    dfs(0); // traverse through the rooms
    return unvisited.size === 0;

    // func def for traversing through the rooms
    function dfs(room: number): void {
        // if room already visited
        if ( !unvisited.has(room) ) return;
     
        // else first time visit
        unvisited.delete(room);

        const keys: number[] = rooms[room];
        keys.forEach( newRoom => dfs(newRoom) );
    }
};