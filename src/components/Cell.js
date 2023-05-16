import React from 'react';
import { useState, useEffect } from "react";

const Cell = ({letterPlacements, row, column, onCellChange}) => {
  const [cellValue, setCellValue] = useState("")

  const handleCellChange = (e) => {
    e.preventDefault()
    onCellChange(e, row, column)
  }

  useEffect(() => {
    setCellValue(letterPlacements[row][column])
  } , [letterPlacements, row, column])

  return (
    <input
      className="cell"
      type="text"
      value={cellValue}
      onChange={handleCellChange}
    />
  );
};

export default Cell;
