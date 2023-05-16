import React, {useEffect} from 'react';
import Cubicle from "../components/Cubicle";

const Sudoku = () => {
  const [gameSize, setGameSize] = React.useState(3)
  const [boardCellLength, setBoardCellLength] = React.useState(3 * gameSize)
  const [letterPlacements, setLetterPlacements] = React.useState(
    Array.from({length: boardCellLength}, () => Array(boardCellLength).fill(""))
  );
  const [cellsThatCanBeChanged, setCellsThatCanBeChanged] = React.useState([])

  useEffect(() => {
    setBoardCellLength(3 * gameSize)
    setLetterPlacements(createSudokuBoard())
  }, []);

  const createSudokuBoard = () => {
    const board = Array.from({length: boardCellLength}, () => Array(boardCellLength).fill(""))
    fillBoard(board, 0, 0);

    const removeCoords = createRandomCoordinates(boardCellLength).slice(0, 30)

    removeCoords.forEach((coord) => {
      board[coord[0]][coord[1]] = ""
    });

    setCellsThatCanBeChanged(removeCoords)

    return board;
  };

  const fillBoard = (board, row, col) => {
    if (row === boardCellLength) {
      return true; // The board is completely filled.
    }

    const nextRow = (col === boardCellLength - 1) ? row + 1 : row;
    const nextCol = (col === boardCellLength - 1) ? 0 : col + 1;

    // If the current position is pre-filled, move to the next one.
    if (board[row][col] !== "") {
      return fillBoard(board, nextRow, nextCol);
    }

    const possibleNumbers = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);


    for (let i = 1; i < possibleNumbers.length; i++) {
      if (checkIfValidPlacement(board, row, col, possibleNumbers[i])) {
        board[row][col] = possibleNumbers[i];
        if (fillBoard(board, nextRow, nextCol)) {
          return true; // Move to the next cell.
        }
      }
    }

    board[row][col] = ""; // If no number can be placed in this cell, reset it and backtrack.
    return false;
}

  const handleCellLetterChange = (e, row, column) => {
    e.preventDefault()

    if (e.target.value.length !== 0 && e.target.value.length > 1) {
      return
    }

    if (e.target.value.length === 1 && !e.target.value.match(/[1-9]/)) {
      return
    }

    if (!cellsThatCanBeChanged.some((coord) => coord[0] === row && coord[1] === column)) {
      return
    }

    const newLetterPlacements = [...letterPlacements]
    newLetterPlacements[row][column] = e.target.value
    setLetterPlacements(newLetterPlacements)
  }

  const verifySolution = () => {
    for (let row = 0; row < boardCellLength; row++) {
      for (let col = 0; col < boardCellLength; col++) {
        if (!checkIfValidPlacement(letterPlacements, row, col, letterPlacements[row][col]) || letterPlacements[row][col] === "") {
          return false
        }
      }
    }

    return true
  }

  const verifyClickHandler = (e) => {
    e.preventDefault()
    if (verifySolution()) {
      alert("You win!")
    } else {
      alert("Try again!")
    }
  }

  return (
    <>
      <h2 className="gameTitle">Pathways: Sudoku</h2>
      <div className="sudoku">
        {Array(gameSize).fill("A").map((i, index) => {
          let calculatedIndex = index * gameSize
          return (
            <>
              <div className="cubicleRow" key={index}>
                <Cubicle letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} startRow={calculatedIndex} startColumn={0} onCellChange={handleCellLetterChange}/>
                <Cubicle letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} startRow={calculatedIndex} startColumn={3} onCellChange={handleCellLetterChange}/>
                <Cubicle letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} startRow={calculatedIndex} startColumn={6} onCellChange={handleCellLetterChange}/>
              </div>
            </>
          )
        })}
      </div>
      <button
        className="verifyButton"
        onClick={verifyClickHandler}
      >
        Verify Solution
      </button>
    </>
  );
};

// create a list of random coordinates for the user to fill in
const createRandomCoordinates = (boardCellLength) => {
  const randomCoordinates = []
  for (let row = 0; row < boardCellLength; row++) {
    for (let col = 0; col < boardCellLength; col++) {
      randomCoordinates.push([row, col])
    }
  }

  return shuffleArray(randomCoordinates)
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

const checkIfValidPlacement = (board, row, column, value) => {
  //Check if value is in row or column
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === value && i !== column) {
      return false
    }
    if (board[i][column] === value && i !== row) {
      return false
    }
  }

  //Check if value is in cubicle
  const cubicleRow = Math.floor(row / 3) * 3
  const cubicleColumn = Math.floor(column / 3) * 3
  for (let i = cubicleRow; i < cubicleRow + 3; i++) {
    for (let j = cubicleColumn; j < cubicleColumn + 3; j++) {
      if (board[i][j] === value && i !== row && j !== column) {
        return false
      }
    }
  }

  return true
}

export default Sudoku;
