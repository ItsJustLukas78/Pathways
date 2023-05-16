import React from 'react';
import Cell from "./Cell";

const Cubicle = ({letterPlacements, startRow, startColumn, onCellChange}) => {
  return (
    <div className="cubicle">
      <div className="cellRow">
        <Cell letterPlacements={letterPlacements} row={startRow} column={startColumn} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} row={startRow} column={startColumn + 1} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} row={startRow} column={startColumn + 2} onCellChange={onCellChange}/>
      </div>
      <div className="cellRow">
        <Cell letterPlacements={letterPlacements} row={startRow + 1} column={startColumn} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} row={startRow + 1} column={startColumn + 1} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} row={startRow + 1} column={startColumn + 2} onCellChange={onCellChange}/>
      </div>
      <div className="cellRow">
        <Cell letterPlacements={letterPlacements} row={startRow + 2} column={startColumn} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} row={startRow + 2} column={startColumn + 1} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} row={startRow + 2} column={startColumn + 2} onCellChange={onCellChange}/>
      </div>
    </div>
  );
};

export default Cubicle;
