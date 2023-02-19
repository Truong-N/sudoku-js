const handleClickRadio = (value) => {
  currentNumber = Number(value);
  render();
};
const handleClickPencil = () => {
  pencil = !pencil;
};

const unsolvedClick = (unsolve_id) => {
  const row = Number(unsolve_id[2]);
  const col = Number(unsolve_id[4]);
  if (pencil) {
    eliminated[row][col][currentNumber - 1] = currentNumber;
  } else {
    // console.log("a")
    if (checkOk(row, col, currentNumber)) {
      solvedArray[row][col] = currentNumber;
      // render();
    } else {
      alert("Error");
    }
  }
  render();
};
// array of given number to play is untouch
const arrGiven = [
  [0, 4, 3, 0, 0, 0, 0, 0, 0],
  [2, 6, 9, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 9, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 6, 0, 0],
  [6, 0, 0, 4, 0, 1, 0, 0, 7],
  [0, 0, 2, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 8, 0, 7, 0, 0, 0],
  [8, 0, 0, 0, 0, 2, 7, 1, 5],
  [0, 0, 0, 0, 0, 0, 4, 3, 0],
];
// solveArray initialize to arrGiven and will be changed when play
const solvedArray = [...arrGiven];
// console.log(solvedArray);
// pencil mode for eliminate cell when play
let pencil = false;
// current play number
let currentNumber = 0;
// unsolved array are from 1 to 9 for all 9x9x9 cells
let unsolved = createArray3D();
let eliminated = createArray9x9x9empty(); // fill with 0

const render = () => {
  assigned();
  displayAll();
  styleAll();
  highlight();
  // checkUnsolved();
};
render();
