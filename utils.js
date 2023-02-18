const createArray3D_1 = (arr) => {
  for (let r = 0; r < 9; r++) {
    const col = [];
    for (let c = 0; c < 9; c++) {
      const z = new Array(9);
      col.push(z);
    }
    arr.push(col);
  }
};
const fillArray = (arr, val) => {
  console.log("arr: ", arr.length);
  if (arr.length) {
    arr.forEach((arr_1) => {
      if (arr_1.length) {
        arr_1.forEach((arr_2) => {
          console.log("arr_2: ", arr_2);
        });
        // console.log("arr_1: ", arr_1.length);
      } else {
        arr_1.push(val);
      }
    });
  } else {
    console.log("first parameter is not an array");
  }
};
const a = new Array(3);
a[0] = 0;
a[1] = 1;
console.log(a);
