function grid(seeds, rows, cols) {
    /* Enter your solution here! */
    let finalgrid = [];
    let count = 0;
    
    for (let i= 0; i<cols;i++){
         finalgrid[i] =[]
        for (let j= 0; j<rows;j++){
            finalgrid[i][j] = seeds[count];
                count ++
        }
    }
    return finalgrid
}