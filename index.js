



// ELEMENTS

const FLOOR = "."
const WALL = "#"
const BOX = "C"
const DESTINY = "D"
const PLAYER = "P"


// MOVEMENTS

const MOVE_LEFT = "p_l"
const MOVE_RIGHT = "p_r"
const MOVE_UP = "p_u"
const MOVE_DOWN = "p_d"

const MOVE_BOX_LEFT = "c_l"
const MOVE_BOX_RIGHT = "c_r"
const MOVE_BOX_UP = "c_u"
const MOVE_BOX_DOWN = "c_d"


// SOLUCIÓN

export function find_a_way(warehouse) {
   
    const routeSteps = []

    const player = searchPositionElements([...warehouse], PLAYER)

    const box = searchPositionElements(warehouse, BOX)

    const destiny = searchPositionElements(warehouse, DESTINY)

    const routeOrder = getRoute(JSON.parse(JSON.stringify(warehouse)), [...player])

    var nextStep = 0

    var current_position = [player[0], player[1]]
    var current_box_position = [box[0], box[1]]



    for (var i = 0; i < routeOrder.length; i++) {


        for (var j = 0; j < routeOrder.length; j++) {


            var positionFilaPlayer = current_position[0]
            var positionColumPlayer = current_position[1]


            var firstStep = routeOrder[nextStep]

            var nextBoxStep = routeOrder[nextStep + 1]

            var positionFilaFirstStep = firstStep === undefined ? destiny[0] : firstStep[0]
            var positionColumnFirstStep = firstStep === undefined ? destiny[1] : firstStep[1]

            var filaNextStepBox = nextBoxStep === undefined ? destiny[0] : nextBoxStep[0]
            var columnNextStepBox = nextBoxStep === undefined ? destiny[0] : nextBoxStep[1]

            // VERIFICA SI LA CAJA LLEGO A DESTINO 
            if (comparePositions(current_box_position, destiny)) {
                break
            }

            // MOVIMIENTOS DE CAJA 

            if (comparePositions(firstStep, current_box_position) ) {


                if (current_box_position[0] === filaNextStepBox) {
                    if (columnNextStepBox > current_box_position[1]) {
                        routeSteps.push(MOVE_BOX_RIGHT)
                        current_box_position = [current_box_position[0], current_box_position[1] + 1]
                    } else {
                        routeSteps.push(MOVE_BOX_LEFT)
                        current_box_position = [current_box_position[0], current_box_position[1] - 1]
                    }
                } else {
                    if (filaNextStepBox < current_box_position[0]) {
                        routeSteps.push(MOVE_BOX_UP)
                        current_box_position = [current_box_position[0] - 1, current_box_position[1]]
                    } else {
                        routeSteps.push(MOVE_BOX_DOWN)
                        current_box_position = [current_box_position[0] + 1, current_box_position[1]]
                    }

                }

            }

            /// MOVIMIENTOS DE PLAYER

            if (positionFilaPlayer === positionFilaFirstStep) {

            
                if (positionColumnFirstStep > positionColumPlayer) {

                    routeSteps.push(MOVE_RIGHT)
                    current_position = [current_position[0], current_position[1] + 1]
                    nextStep++

                } else {

                    routeSteps.push(MOVE_LEFT)
                    current_position = [current_position[0], current_position[1] - 1]
                    nextStep++

                }

            } else {

                if (positionFilaFirstStep < positionFilaPlayer) {

                    routeSteps.push(MOVE_UP)
                    current_position = [current_position[0] - 1, current_position[1]]
                    nextStep++

                } else {

                    routeSteps.push(MOVE_DOWN)
                    current_position = [current_position[0] + 1, current_position[1]]
                    nextStep++
                }
            }

            i = 0
            j = 0



        }
    }

    return routeSteps
}



export function getRoute(warehouse, player) {

    let grid = warehouse
    const route = []

    for (var i = 0; i < warehouse.length; i++) {

        for (var j = 0; j < warehouse.length; j++) {

            if (grid[i][j] === PLAYER) {

                var leftPosition = [player[0], player[1] + 1]
                var rightPosition = [player[0], player[1] - 1]

                var topPosition = [player[0] - 1, player[1]]
                var downPosition = [player[0] + 1, player[1]]

                if (grid[leftPosition[0]][leftPosition[1]] === FLOOR || grid[leftPosition[0]][leftPosition[1]] === BOX) {

                    route.push(leftPosition)

                    grid[player[0]][player[1]] = WALL
                    grid[i][j] = WALL
                    grid[leftPosition[0]][leftPosition[1]] = PLAYER

                    player[0] = leftPosition[0]
                    player[1] = leftPosition[1]

                    i = 0
                    j = 0

                }
                if (grid[rightPosition[0]][rightPosition[1]] === FLOOR || grid[rightPosition[0]][rightPosition[1]] === BOX) {

                    route.push(rightPosition)

                    grid[player[0]][player[1]] = WALL
                    grid[i][j] = WALL
                    grid[rightPosition[0]][rightPosition[1]] = PLAYER

                    player[0] = rightPosition[0]
                    player[1] = rightPosition[1]

                    i = 0
                    j = 0

                }
                if (grid[downPosition[0]][downPosition[1]] === FLOOR || grid[downPosition[0]][downPosition[1]] === BOX) {

                    route.push(downPosition)

                    grid[player[0]][player[1]] = WALL
                    grid[i][j] = WALL
                    grid[downPosition[0]][downPosition[1]] = PLAYER

                    player[0] = downPosition[0]
                    player[1] = downPosition[1]

                    i = 0
                    j = 0

                }

                if (grid[topPosition[0]][topPosition[1]] === FLOOR || grid[topPosition[0]][topPosition[1]] === BOX) {

                    route.push(topPosition)

                    grid[player[0]][player[1]] = WALL
                    grid[i][j] = WALL
                    grid[topPosition[0]][topPosition[1]] = PLAYER

                    player[0] = topPosition[0]
                    player[1] = topPosition[1]

                    i = 0
                    j = 0

                }


            }

        }
    }

    return route
}


function comparePositions(a1, a2) {
    var i = a1.length;
    if (i != a2.length) return false;

    while (i--) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
};


function searchPositionElements(warehouse, element) {

    const elements = []
    for (var i = 0; i < warehouse.length; i++) {

        for (var j = 0; j < warehouse.length; j++) {

            if (warehouse[i][j] === element) {

                elements.push([i, j]);
            }
        }
    }
    return elements.reduce((acc, el) => acc.concat(el), [])
}

export default find_a_way



const grid =
    [["#", "#", "#", "#", "#"],
    ["#", "#", "D", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "#", "#", "C", "#"],
    ["#", "P", ".", ".", "#"],
    ["#", "#", "#", "#", "#"]]


const way = find_a_way(grid)
console.log(way);
