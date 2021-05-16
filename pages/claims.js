import React, { useState, useCallback, useEffect } from "react";
import { useContractKit } from "@celo-tools/use-contractkit";
import AppNavigation from "../components/AppNavigation";

export default function Claims() {
  const { address, kit, connect} = useContractKit();

  return (
    <div>
      <AppNavigation />

      {address ? (
        <div>Connected to {address}</div>
      ) : (
        <button onClick={connect}>Connect wallet</button>
      )}

    </div>
  );
}
