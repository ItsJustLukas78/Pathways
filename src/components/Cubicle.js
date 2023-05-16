import React from 'react';
import Cell from "./Cell";

const Cubicle = ({letterPlacements, cellsThatCanBeChanged, startRow, startColumn, onCellChange}) => {
  return (
    <div className="cubicle">
      <div className="cellRow">
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow} column={startColumn} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow} column={startColumn + 1} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow} column={startColumn + 2} onCellChange={onCellChange}/>
      </div>
      <div className="cellRow">
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow + 1} column={startColumn} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow + 1} column={startColumn + 1} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow + 1} column={startColumn + 2} onCellChange={onCellChange}/>
      </div>
      <div className="cellRow">
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow + 2} column={startColumn} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow + 2} column={startColumn + 1} onCellChange={onCellChange}/>
        <Cell letterPlacements={letterPlacements} cellsThatCanBeChanged={cellsThatCanBeChanged} row={startRow + 2} column={startColumn + 2} onCellChange={onCellChange}/>
      </div>
    </div>
  );
};

export default Cubicle;
