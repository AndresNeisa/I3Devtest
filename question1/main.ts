export function isValidWalk(walk: string[]) {
  const timeLimit = 10;
  // Calculates the distance, in blocks, from the starting point till the end point
  const startingPointDistance = walk.reduce((distance, direction) => {
    switch (direction){
        case 'n':
        case 'e':
            return distance =  distance + 1;
        case 's':
        case 'w':
            return distance = distance -1;
    }
  }, 0);

  // If the distance from the end point plus the number of blocks walked previously is equal to the timelimit return true, otherwise, return false
  if(Math.abs(startingPointDistance) + walk.length === timeLimit )
    return true
  else return false
}

