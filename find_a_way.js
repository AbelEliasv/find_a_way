

const warehouse = [
    // columna    0    1    2    3    4   
    ["#", "#", "#", "#", "#"],
    ["#", "#", "#", "D", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "#", "#", ".", "#"],
    ["#", "P", ".", "C", "#"],
    ["#", "#", "#", "#", "#"]
]

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


const cols = warehouse.length

const searchPositionElements = (warehouse, element) => {

    const route = []

    for (var i = 0; i < cols; i++) {

        for (var j = 0; j < cols; j++) {

            if (warehouse[i][j] === element) {

                route.push([i, j]);
            }
        }
    }

    return route
}

debugger

const route = searchPositionElements(warehouse, FLOOR).reverse()
const player = searchPositionElements(warehouse, PLAYER).reduce((acc, el) => acc.concat(el), [])
const box = searchPositionElements(warehouse, BOX).reduce((acc, el) => acc.concat(el), [])
const destiny = searchPositionElements(warehouse, DESTINY)
const wall = searchPositionElements(warehouse, WALL)


const comparePositions = function (a1, a2) {
    var i = a1.length;
    if (i != a2.length) return false;

    while (i--) {
        if (a1[i] !== a2[i]) return false;
    }
    return true;
};





for (var i = 0; i < cols; i++) {


    for (var j = 0; j < cols; j++) {

    
        var positionFilaPlayer = player[0]
        var positionColumPlayer = player[1]

        var nextStep = 2
        var firstStep = route[nextStep]

        var positionFilaFirstStep = firstStep[0]
        var positionColumnFirstStep =  firstStep[1]      
      
        // Comparar si el player  esta en la miusma fila  que el primer paso 
        if(positionFilaFirstStep ===  positionFilaPlayer){
            
            // Si  esta en la misma fila  , comprobar si el primer paso esta adelante o atras

            if(positionColumnFirstStep > positionColumPlayer){

                console.log("Me debo mover a la derecha");

            }else{
                console.log("Me debo mover a la izquierda");
            }

        }else{ 
            
            if(positionFilaFirstStep <= positionFilaPlayer){

                console.log("Me debo mover a la arriba");

            }else{
                console.log("Me debo mover a la abajo");
            }

        }
        
    }
}

//   optput  ["p-r", "c-u", "p-r", "c-u", "p-u", "c-u"]