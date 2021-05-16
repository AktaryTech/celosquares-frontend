import { createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {
    charityAddr: "",
    firstTeam: "",
    secondTeam: "",
    team1id: "",
    team2id: "",
    gameid: "",
    betSize: "",
    quarterPoolAllocation: "",
    finalPoolAllocation: "",
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
