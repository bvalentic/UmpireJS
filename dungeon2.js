process.stdin.resume();
process.stdin.setEncoding('utf8');

// Dijkstra's algorithm to find path
// Determine path exists
// Print path along maze
// Return "Trapped" if no path exists

// Classes? Grid, Cell

class Grid {
    cells = new Array();
    rows = 0;
    columns = 0;
    start = new Cell(); // start point for pathfinding
    end = new Cell(); // endpoint for pathfinding
    stringValue = ""; // representation of grid as initial string

    // take array and re-print with new Dijkstra path
    toString() {
        this.cells.forEach(cell => {
            this.stringValue += cell.value
        })
        return this.stringValue;
    }

    setNeighbors(cell) {
        // Determine if a neighbor is passable; add to neighbors array if so
        let currentPosition = cell.position;
        let north = [currentPosition[0] - 1, currentPosition[1]]
        let south = [currentPosition[0] + 1, currentPosition[1]]
        let east = [currentPosition[0], currentPosition[1 + 1]]
        let west = [currentPosition[0], currentPosition[1 - 1]]
        let directions = [north, south, east, west];

        directions.forEach(direction => {
            if (cells[direction] && cells[direction].isPassable) {
                this.neighbors += direction;
            }
        });
    }

    // Use Dijkstra's algorithm to find & print shortest path
    dijkstra() {
        let current = new Cell();
        current = grid.start;
        let currentDistance = 0;
        current.distance = currentDistance;
        // while loop to check if at end
        while (current.value !== "E") {
            current.neighbors.forEach(neighbor => {
                // if neighbor is passable, go to next cell
                if (neighbor.isPassable) {
                    this.cells[current.position[0], current.position[1]]
                    current.value = "*";
                    current = neighbor;
                    currentDistance++;
                }
            })
        }
        //return
    }
}

class Cell {
    value = ""; // the actual string/char value
    distance = 0; // distance from start
    position = [];
    neighbors = [];

    // "#" is the only impassible tile; ".", "S", "E", are all passable
    isPassable() {
        if (this.value === "#") return false
        else return true
    }
}

// Take each value and convert it to a usable Cell; add to Grid
function convertToGrid(lines) {
    let grid = new Grid();
    let newCell = new Cell();
    let lineCount = 0;
    for (const line of lines) {
        for (let i = 0; i < line.length; i++) {
            newCell.position = [lineCount, i]
            newCell.value = line[i];
            if (newCell.value === "S") {
                grid.start = newCell;
            }
            if (newCell.value === "E") {
                grid.end = newCell;
            }
            grid[lineCount, i] = newCell;
            if (i > grid.columns) grid.columns = i;
        }
        lineCount++;
        if (lineCount > grid.rows) grid.rows = lineCount;
    }
    grid.cells.forEach(cell => { //set neighbors after grid is set up
        grid.setNeighbors(cell)
    })
    return grid;
}

let stdin = '';
let grid;
process.stdin.on('data', (chunk) => {
    stdin = `${stdin}${chunk}`;
}).on('end', () => {
    const lines = stdin.trim().split('\n');  // maze split by lines
    grid = convertToGrid(lines);
    //grid.dijkstra();
    let result = grid.toString();
    process.stdout.write(`${lines}`);
});
