process.stdin.resume();
process.stdin.setEncoding('utf8');

// Dijkstra's algorithm to find path
// Determine path exists
// Print path along maze
// Return "Trapped" if no path exists

// Classes? Grid, Cell

class Grid {
    cells = [];
    start = new Cell(); // start point for pathfinding
    end = new Cell(); // endpoint for pathfinding
    stringValue = ""; // representation of grid as initial string

    // take array and re-print with new Dijkstra path
    printGrid() {
        let currentRow = 0;
        let currentColumn = 0;
        this.cells.forEach(cell => {
            if (cell.position[0] === currentRow) {
                this.stringValue += cell.value
            } else { // when row changes, add newline and increment
                this.stringValue += "\n" + cell.value
                currentRow++;
            }
        })
        return this.stringValue;
    }

    // Use Dijkstra's algorithm to find & print shortest path
    dijkstra() {
        let current = new Cell();
        current.value = grid.start.value;
        let currentDistance = 0;
        current.distance = currentDistance;
        // while loop to check if at end
        while (current.value !== grid.end.value) {
            current.neighbors.forEach(neighbor => {
                // if neighbor is passable, go to next cell
                if (neighbor.isPassable) {
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

    // Determine if a neighbor is passable; add to neighbors array if so
    getNeighbors() {
        let currentPosition = this.position;
        let north = [currentPosition[0] - 1, currentPosition[1]]
        let south = [currentPosition[0] + 1, currentPosition[1]]
        let east = [currentPosition[0], currentPosition[1 + 1]]
        let west = [currentPosition[0], currentPosition[1 - 1]]
        let directions = [north, south, east, west];

        directions.forEach(direction => {
            if (direction && direction.isPassable) {
                this.neighbors += direction;
            }
        });
    }

    // "#" is the only impassible tile; ".", "S", "E", are all passable
    isPassable() {
        if (this.value === "#") return false
        else return true
    }
}

// Take each value and convert it to a usable Cell; add to Grid
function convertToGrid(lines) {
    let grid = new Grid(lines);
    for (const line of lines) {
        let lineCount = 0;
        for (let i = 0; i < line.length; i++) {
            let newCell = new Cell();
            newCell.position = [lineCount, i];
            newCell.value = line[i];
            newCell.neighbors = newCell.getNeighbors();
            grid[i, lineCount] = newCell;
        }
        lineCount++;
    }
    return grid;
}

let stdin = '';
let grid;
process.stdin.on('data', (chunk) => {
    stdin = `${stdin}${chunk}`;
}).on('end', () => {
    const lines = stdin.trim().split('\n');  // maze split by lines
    grid = convertToGrid(lines);
    grid.dijkstra();
    grid.printGrid();
    for (const line of lines) {
        process.stdout.write(`${line}\n`);
    }
});
