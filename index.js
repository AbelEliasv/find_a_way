
import { find_a_way, getRoute } from './src/utils.mjs'

const grid =
    [["#", "#", "#", "#", "#"],
    ["#", "#", ".", ".", "#"],
    ["#", "#", "D", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "P", ".", "C", "#"],
    ["#", "#", "#", "#", "#"]]


const way = find_a_way(grid)
console.log(way);

/**
 * 
 *                        ********** BEAUTIFUL BUGS ***********
 *  - El metodo de obtener ruta falla cuando el player esta al borde las columnas y filas 
 *  - El algoritmo falla cuando un destino esta alado termina alado de un camino 
 *  
 */