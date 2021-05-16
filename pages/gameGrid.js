import React, { useState, useCallback, useEffect } from "react";
import AppNavigation from "../components/AppNavigation";
import TheBox from "../components/TheBox";
import styles from "../styles/GameGrid.module.css";

export default function GameGrid() {
  let gridItemValues  = []
  for (let i = 1; i <= 100; i++) {
    gridItemValues.push(i);
  }
  const gridItems = gridItemValues.map((gridItem, index) => (
    <TheBox color="orange" className="w-24 py-2 px-3" key={index}>
      {gridItem}
    </TheBox>
  ));
  return (
    <>
      <div className="container">
        <AppNavigation />
        
        {/* <div class="grid grid-flow-col grid-cols-10 grid-rows-10 gap-4"> */}
        <div class={styles.grid_container}>
        
        {gridItems}
        
        </div>
    
      </div>
    </>
  );
}
