import React, { useState, useCallback, useEffect } from "react";
import AppNavigation from "../components/AppNavigation";
import TheBox from "../components/TheBox";
import styles from "../styles/GameGrid.module.css";

export default function GameGrid() {
  let gridItemValues = [];
  for (let i = 1; i <= 100; i++) {
    gridItemValues.push(i);
  }
  const gridItems = gridItemValues.map((gridItem, index) => (
    <TheBox color="orange" className="h-12 cursor-pointer text-center" key={index}>
      {gridItem}
    </TheBox>
  ));
  return (
    <>
      <div className="container">
        <AppNavigation />

        <div class={styles.grid_container}>{gridItems}</div>
      </div>
    </>
  );
}
