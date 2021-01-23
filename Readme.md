# 🏁 Buscar camino  

## Problema 

Buscar la solución a un juego, en que una persona mueve una caja dentro de una bodega. El juego consiste en una matriz de tamaño [m x n], donde los elementos pueden ser muralla, piso, persona, caja y destino.

## Reglas

  1. El jugador no puede caminar arriba de la caja (pero si moverla y posicionarse en el espacio).  
  2. La caja solo se puede mover si el jugador esta junto a ella.
  3. El jugador se puede mover para arriba , abajo izquierda y derecha siempre y cuando se mueve sobre el piso 
  
## Solución 💡

  La solución propuesta consiste en la creación de dos funciones principales .La primera se encarga en encontrar la ruta del camino  de forma ordenada y la segunda función se encarga en mover el player y caja en las posiciones dadas por la función anterior.
  
  1. Obtención de ruta 
    ![screnshot]()
  2. Recorrido hasta destino
