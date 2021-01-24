# 🏁 Buscar camino  

## Problema 

Buscar la solución a un juego, en que una persona mueve una caja dentro de una bodega. El juego consiste en una matriz de tamaño [m x n], donde los elementos pueden ser muralla, piso, persona, caja y destino.

## Reglas

  1. El jugador no puede caminar arriba de la caja (pero si moverla y posicionarse en el espacio).  
  2. La caja solo se puede mover si el jugador esta junto a ella.
  3. El jugador se puede mover para arriba , abajo izquierda y derecha siempre y cuando se mueve sobre el piso 
  
## Solución 💡

  La solución propuesta consiste en la creación de dos funciones principales .La primera se encarga de encontrar la ruta del camino  de forma ordenada y la segunda función se encarga de mover el player y caja en las posiciones dadas por la función anterior.
  
### Obtención de ruta

Para obtener las posiciones ([x,x]) de la ruta (.) , se itera la matriz hasta encontrar la posision del player (P) . Al encontrar la posicion P , se verifican las posiciones de las casillas alrededor él y compara si alguna piosisión es un camino válido, moviendolo a  la posición  actual de P a la posisión en donde encontro el camino válido.
  
Como respuesta se obtiene este array en orden [[x,y],[x,y],[x,y]] 

  
![alt](https://user-images.githubusercontent.com/29969086/105612592-fcf28b80-5d9b-11eb-950a-717b142c510b.png)

### Recorrido hasta destino

El recorrido hacia el destino se hace posicionandose en cada elemento (step[x,y]) de la ruta. Por cada step[x,y]  se verifica si la columna de step[x,(Y)] es mayor a la columna del player[x,(Y)] para asi moverse a la derecha (p_r), de ser menor se moveria a la izquierda (p_l). 

Para el movimiento arriba y abajo se verifica comparan las filas de p y step.

La misma lógica se aplica para la caja (C).
