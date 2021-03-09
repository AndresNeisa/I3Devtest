export function findOutlier(integers: number[]): number {
    let typeCounter = 0;
    for(let i = 0; i < 3; i++){
      typeCounter = typeCounter + integers[i] % 2;
    }
    // if typeCounter is greater than 2 then the lier is even 
    const lierType = typeCounter > 1 ? 0 : 1;

    const index = integers.findIndex( num => num % 2 === lierType);

    return integers[index]
  }