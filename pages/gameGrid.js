import React, { useState, useCallback, useEffect } from "react";
import AppNavigation from "../components/AppNavigation";
import TheBox from "../components/TheBox";
import styles from "../styles/GameGrid.module.css";
import { useContractKit } from "@celo-tools/use-contractkit";
import poolAbi from "../ABI/pool.json";

export default function GameGrid() {
    const [contract, setContract] = useState(null);
    const { kit, address, connect } = useContractKit();

    const [grid, setGrid] = useState(() => {
        let gridItemValues = new Array();
        for (let x = 0; x < 10; x++) {
            gridItemValues[x] = new Array();
            for (let y = 0; y < 10; y++) {
              gridItemValues[x][y] = y;
            }
        }
        console.log(gridItemValues);
        return gridItemValues;
    })
    const [claiming, setClaiming] = useState({});
    const [mySquares, setMySquares] = useState([]);

    useEffect(() => {
        console.log(`claiming: ${claiming.x} ${claiming.y}`);
        if(!claiming.x || !claiming.y){
            return;
        }
        let instance = new kit.web3.eth.Contract(
            poolAbi,
            '0xd694AAce785B43cD3Ee77b83A5ca0632FEc53474'
        );
        const placeBet = async () => {
            await instance.methods.placeBet(claiming.x, claiming.y);
            setClaiming(false);
        }
        placeBet();
    }, [claiming])

  return (
    <>
      <div className="container">
        <AppNavigation />
        
        <div className={styles.grid_container}>
        
            {grid.map((row, x) => (
                row.map((column, y) => (
                    <TheBox color="orange" className="h-12 cursor-pointer text-center" key={`${x}-${y}`}
                        onClick={() => setClaiming({x, y})}>
                        {`${x}-${y}`}
                    </TheBox>
                ))
            ))}
        
        </div>
      </div>
    </>
  );
}
