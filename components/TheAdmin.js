import React, { useState } from "react";
import TheBox from "./TheBox";
import TheInput from "./TheInput";
import styles from "../styles/TheAdmin.module.css";

export default function TheAdmin({ onTheSubmit }) {
  const [things, setThings] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      charityAddr,
      firstTeam,
      secondTeam,
      team1id,
      team2id,
      gameid,
      betSize,
      quarterPoolAllocation,
      finalPoolAllocation,
    } = e.target;
    console.log("3434234",firstTeam.value) // this works
    


    let theObj = {
      charityAddr: charityAddr.value,
      firstTeam: firstTeam.value,
      secondTeam: secondTeam.value,
      team1id: team1id.value,
      team2id: team2id.value,
      gameid: gameid.value,
      betSize: betSize.value,
      quarterPoolAllocation: quarterPoolAllocation.value,
      finalPoolAllocation: finalPoolAllocation.value,
    };

    onTheSubmit(theObj);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <TheInput
              titleThing="Charity: "
              nameThing="charityAddr"
              typeThing="text"
              defaultThing=""
            />
            <TheInput
              titleThing="First Team: "
              nameThing="firstTeam"
              typeThing="text"
              defaultThing=""
            />
            <TheInput
              titleThing="Second Team: "
              nameThing="secondTeam"
              typeThing="text"
              defaultThing=""
            />
            <TheInput
              titleThing="First Id: "
              nameThing="team1id"
              typeThing="number"
              defaultThing="100"
            />
            <TheInput
              titleThing="Second Id: "
              nameThing="team2id"
              typeThing="number"
              defaultThing="100"
            />
            <TheInput
              titleThing="Game Id: "
              nameThing="gameid"
              typeThing="number"
              defaultThing="100"
            />
            <TheInput
              titleThing="Bet Size: "
              nameThing="betSize"
              typeThing="number"
              defaultThing="100"
            />
            <TheInput
              titleThing="Q Pool Alloc: "
              nameThing="quarterPoolAllocation"
              typeThing="number"
              defaultThing="100"
            />
            <TheInput
              titleThing="F Pool Alloc: "
              nameThing="finalPoolAllocation"
              typeThing="number"
              defaultThing="100"
            />
          </div>
          <input type="submit" value={""} name="submitBtn" id="submitBtn" />
          <label htmlFor="submitBtn">
            <TheBox
              color="orange"
              className="w-36 py-1.5 px-2 cursor-pointer font-bold text-2xl"
            >
              Register
            </TheBox>
          </label>
        </form>
      </div>
    </>
  );
}
