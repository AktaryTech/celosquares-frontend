import React, { useState, useCallback, useEffect} from "react";
import AppNavigation from "../components/AppNavigation";
import TheAdmin from "../components/TheAdmin";
import { useContractKit } from "@celo-tools/use-contractkit";
import ABI from "../factory.json";
import {useAppContext} from "../components/AppContext"

export default function News() {
  const [contract, setContract] = useState(null);
  const { kit, address, connect } = useContractKit();

  async function initContract({charityAddr, firstTeam, secondTeam, team1id, team2id, gameid, betSize, quarterPoolAllocation, finalPoolAllocation}) {
    // const scoracleAddy = "0x559553b6FC65E31459A0b4E120BBff82794E8bE8";
    const factoryAddy = "0xE58AaeA83Cbea80F69901562338E3D6042554925";

    const ss = useAppContext.sharedState
    
    let contract = new kit.web3.eth.Contract(ABI, factoryAddy);

    console.log("the firstTeam", firstTeam)

    const txObject = await contract.methods.createPool(charityAddr, firstTeam, secondTeam, team1id, team2id, gameid, betSize, quarterPoolAllocation, finalPoolAllocation)
    console.log("Tx Obj: ", txObject)

    // console.log(contract);

    // getName(instance);
    // setName(instance, "hello world!");
  }

  async function fetchGames () {
    await fetch('http://localhost:5000/api/games/?api-key=dorahacks', {method: 'GET', mode: 'cors'})
  .then(response => response.json())
  .then(data => console.log(data[0]));
  }
  
  useEffect(() => {
    fetchGames();
  }, []);
  
  const handleTheSubmit = (theObj) => {
    console.log(theObj)
    initContract(theObj)
  }

  return (
    <>
      <div className="container">
        <AppNavigation />
        <TheAdmin onTheSubmit={handleTheSubmit}/>
      </div>
    </>
  );
}
