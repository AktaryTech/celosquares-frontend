import React, { useState, useCallback, useEffect } from "react";
import AppNavigation from "../components/AppNavigation";
import TheBox from "../components/TheBox";
import styles from "../styles/GameGrid.module.css"

export default function GameGrid() {
  const gridItemValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const gridItems = gridItemValues.map((gridItem, index) => (
    <TheBox color="orange" className="w-24 py-2 px-3" key={index}>
      {gridItem}
    </TheBox>
  ));
  return (
    <>
      <div className="container">
        <AppNavigation />
        <div class="grid_container">{gridItems}</div>
      </div>
    </>
  );
}
