/**
 * Determines how many rows and columns your garden will
 * need to be closest to a square given a number of seeds.
 *
 * @param {number} seedCount - The number of seeds in your
 * seed packet.
 * @return {array} - [rows, columns] needed for your grid
 * layout (for example [4, 5] represents a 4 row x 5 column
 * grid)
*/
function grid(seedCount) {
    const length = Math.ceil(Math.sqrt(seedCount))
    const width = Math.ceil(seedCount / length)
    return [length, width]
  }