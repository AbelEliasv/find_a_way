

const warehouse =
    [["#", "#", "#", "#", "#"],
    [".", ".", ".", ".", "#"],
    ["D", "#", "#", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "P", ".", ".", "#"],
    ["#", "#", "#", "#", "#"]]
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


// RULES
// 1.- El jugador no puede caminar arriba de la caja (pero si moverla y posicionarse en el espacio)
// 2.- La caja solo se puede mover si el jugador esta junto a ella
// 3.- El jugador se puede mover para arriba , abajo izquierda y derecha siempre y cuando se mueve sobre el piso  



const searchPositionElements = (warehouse, element) => {

    const elements = []

    for (var i = 0; i < cols; i++) {

        for (var j = 0; j < cols; j++) {

            if (warehouse[i][j] === element) {

                elements.push([i, j]);
            }
        }
    }
    return elements
}

const cols = warehouse.length

const route = searchPositionElements([...warehouse], FLOOR)

const player = searchPositionElements([...warehouse], PLAYER).reduce((acc, el) => acc.concat(el), [])

const box = searchPositionElements(warehouse, BOX).reduce((acc, el) => acc.concat(el), [])

const destiny = searchPositionElements(warehouse, DESTINY).reduce((acc, el) => acc.concat(el), [])

const routeOrder = getRoute(JSON.parse(JSON.stringify(warehouse)), [...player])





function getRoute(warehouse, player) {
    debugger
    let grid = warehouse
    const route = []



    for (var i = 0; i < cols; i++) {

        for (var j = 0; j < cols; j++) {

            if (grid[i][j] === PLAYER) {

                var leftPosition = [player[0], player[1] + 1]
                var rightPosition = [player[0], player[1] - 1]

                var topPosition = [player[0] - 1, player[1]]
                var downPosition = [player[0] + 1, player[1]]

                if (grid[leftPosition[0]][leftPosition[1]] === FLOOR) {

                    route.push(leftPosition)

                    grid[player[0]][player[1]] = WALL
                    grid[i][j] = WALL
                    grid[leftPosition[0]][leftPosition[1]] = PLAYER

                    player[0] = leftPosition[0]
                    player[1] = leftPosition[1]

                    i = 0
                    j = 0

                }
                if (grid[rightPosition[0]][rightPosition[1]] === FLOOR) {

                    route.push(rightPosition)

                    grid[player[0]][player[1]] = WALL
                    grid[i][j] = WALL
                    grid[rightPosition[0]][rightPosition[1]] = PLAYER

                    player[0] = rightPosition[0]
                    player[1] = rightPosition[1]

                    i = 0
                    j = 0

                }
                if (grid[downPosition[0]][downPosition[1]] === FLOOR) {

                    route.push(downPosition)

                    grid[player[0]][player[1]] = WALL
                    grid[i][j] = WALL
                    grid[downPosition[0]][downPosition[1]] = PLAYER

                    player[0] = downPosition[0]
                    player[1] = downPosition[1]

                    i = 0
                    j = 0

                }

                if (grid[topPosition[0]][topPosition[1]] === FLOOR) {

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


const comparePositions = function (a1, a2) {
    var i = a1.length;
    if (i != a2.length) return false;

    while (i--) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
};







const routeSteps = []

var nextStep = 0

var current_position = [player[0], player[1]]
var current_box_position = [box[0], box[1]]


for (var i = 0; i < routeOrder.length; i++) {


    for (var j = 0; j < cols; j++) {


        var positionFilaPlayer = current_position[0]
        var positionColumPlayer = current_position[1]


        var firstStep = routeOrder[nextStep]
        var positionFilaFirstStep = firstStep === undefined ? destiny[0] : firstStep[0]
        var positionColumnFirstStep = firstStep === undefined ? destiny[1] : firstStep[1]

        if (comparePositions(current_position, destiny)) {
            break
        }

        // Comparar si el player  esta en la miusma fila  del el primer paso 
        if (positionFilaPlayer === positionFilaFirstStep) {

            // Si  esta en la misma fila  , comprobar si el primer paso esta adelante o atras

            if (positionColumnFirstStep > positionColumPlayer) {

                if (positionColumnFirstStep === box[1]) {

                    routeSteps.push(MOVE_BOX_RIGHT)
                    current_box_position = [current_box_position[0], current_box_position[1] + 1]
                } else {
                    routeSteps.push(MOVE_RIGHT)
                    current_position = [current_position[0], current_position[1] + 1]
                    nextStep++
                }

                i = 0
                j = 0

            } else {
                ///console.log("Me debo mover a la izquierda");
                routeSteps.push(MOVE_LEFT)
                current_position = [current_position[0], current_position[1] - 1]
                nextStep++
                i = 0
                j = 0
            }

        } else {

            if (positionFilaFirstStep < positionFilaPlayer) {
                //console.log("Me debo mover a la arriba");
                routeSteps.push(MOVE_UP)
                current_position = [current_position[0] - 1, current_position[1]]
                nextStep++
                i = 0
                j = 0

            } else {
                //console.log("Me debo mover a la abajo");
                routeSteps.push(MOVE_DOWN)
                current_position = [current_position[0] + 1, current_position[1]]
                nextStep++
                i = 0
                j = 0
            }

        }


    }
}

console.log(routeSteps);







//   optput  ["p-r", "c-u", "p-r", "c-u", "p-u", "c-u"]