import React, { useState, useCallback, useEffect} from "react";
import AppNavigation from "../components/AppNavigation";
import { useContractKit } from "@celo-tools/use-contractkit";
import ABI from "../factory.json";
import {useAppContext} from "../components/AppContext"

export default function News() {
  const [contract, setContract] = useState(null);
  const { kit, address, connect } = useContractKit();

  async function initContract() {
    const scoracleAddy = "0xf1341104f01abe316067682aa00d5805970378a9";
    const factoryAddy = "0x2e7452a467b868c6c44c3eac159f7fb9b2c7c1c0";

    const ss = useAppContext.sharedState
    

    let contract = new kit.web3.eth.Contract(ABI, factoryAddy);
    // console.log(useAppContext.sharedState.charityAddr )

    // const txObject = await contract.methods.createPool(newName)

    // console.log(contract);

    // getName(instance);
    // setName(instance, "hello world!");
  }

  useEffect(() => {
    initContract();
  }, []);

  return (
    <>
      <div className="container">
        <AppNavigation />
      </div>
    </>
  );
}
