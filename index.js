
import { find_a_way, getRoute } from './src/utils.mjs'

const grid =
    [["#", "#", "#", "#", "#"],
    ["#", "#", "D", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "#", "#", "C", "#"],
    ["#", "P", ".", ".", "#"],
    ["#", "#", "#", "#", "#"]]


const way = find_a_way(grid)
console.log(way);
