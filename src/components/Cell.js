import React from 'react';
import { useState, useEffect } from "react";

const Cell = ({letterPlacements, cellsThatCanBeChanged, row, column, onCellChange}) => {
  const [cellValue, setCellValue] = useState("")
  const [cellStlye, setCellStyle] = useState("cell")

  const handleCellChange = (e) => {
    e.preventDefault()
    onCellChange(e, row, column)
  }

  useEffect(() => {
    setCellValue(letterPlacements[row][column])
    if (!cellsThatCanBeChanged.some((coord) => coord[0] === row && coord[1] === column)) {
      setCellStyle("cell cell--disabled")
    } else if (letterPlacements[row][column] !== "") {
      setCellStyle("cell cell--filled")
    } else {
      setCellStyle("cell")
    }
  } , [letterPlacements, row, column])

  return (
    <input
      className={cellStlye}
      type="text"
      value={cellValue}
      onChange={handleCellChange}
    />
  );
};

export default Cell;
