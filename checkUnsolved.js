const checkUnsolved = () => {
  // console.log("checkUnsolved");
  //check row
  for (let r = 0; r < 9; r++) {
    // let count = 0;
    for (let z = 0; z < 9; z++) {
      let count = 0;
      let col = 0;
      for (let c = 0; c < 9; c++) {
        if (unsolved[r][c][z] === z + 1) {
          // console.log(`r${r}c${c}z${z}:${unsolved[r][c][z]}`);
          count++;
          col = c;
        }
      }
      if (count === 1) {
        // if (z + 1 === currentNumber) {
        console.log(`row${r}col${col}value${z + 1}`);
        solvedArray[r][col] = z + 1;

        return true;
      }
    }
  }

  //check col
  for (let c = 0; c < 9; c++) {
    // let count = 0;
    for (let z = 0; z < 9; z++) {
      let count = 0;
      let row = 0;
      for (let r = 0; r < 9; r++) {
        if (unsolved[r][c][z] === z + 1) {
          // console.log(`r${r}c${c}z${z}:${unsolved[r][c][z]}`);
          count++;
          row = r;
        }
      }
      if (count === 1) {
        // if (z + 1 === currentNumber) {
        console.log(`row${row}col${c}value${z + 1}`);
        solvedArray[row][c] = z + 1;

        return true;
      }
    }
  }

  for (let r = 0; r < 9; r++) {
    // let count = 0;
    for (let c = 0; c < 9; c++) {
      let count = 0;
      let zval = 0;
      for (let z = 0; z < 9; z++) {
        if (unsolved[r][c][z] > 0) {
          // console.log(`r${r}c${c}z${z}:${unsolved[r][c][z]}`);
          count++;
          zval = z;
        }
      }
      if (count === 1) {
        // if (z + 1 === currentNumber) {
        console.log(`row${r}col${c}value${zval}`);
        solvedArray[r][c] = zval + 1;

        return true;
      }
    }
  }
};
