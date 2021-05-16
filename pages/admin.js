import React, { useState, useCallback } from "react";
import AppNavigation from "../components/AppNavigation";
import TheBox from "../components/TheBox";
import styles from "../styles/Admin.module.css";

export default function Admin() {
  return (
    <>
      <div className="container">
        <AppNavigation />
        {/* charityAddr: "",
    betSize: "",
    quarterPoolAllocation: "",
    finalPoolAllocation: "" */}

        <form onSubmit="Foo">
          <div className="flex flex-col">
            <div className="labelAndInput">
              <label className="lbl" htmlFor="charityAddr">
                Charity Address:{" "}
              </label>
              <input
                className="inpt"
                id="charityAddr"
                name="charityAddr"
                type="text"
                required
              />
            </div>
            <div className="labelAndInput">
              <label className="lbl" htmlFor="betSize">Bet Size: </label>
              <input
                className="inpt"
                id="betSize"
                name="betSize"
                type="text"
                required
              />
            </div>
            <div className="labelAndInput">
              <label className="lbl" htmlFor="quarterPoolAllocation">Q Pool Alloc: </label>
              <input
                className="inpt"
                id="quarterPoolAllocation"
                name="quarterPoolAllocation"
                type="text"
                required
              />
            </div>
            <div className="labelAndInput">
              <label className="lbl" htmlFor="finalPoolAllocation">F Pool Alloc: </label>
              <input
                className="inpt"
                id="finalPoolAllocation"
                name="finalPoolAllocation"
                type="text"
                required
              />
            </div>
          </div>
          <TheBox
            color="orange"
            className="w-36 py-1.5 px-2 cursor-pointer font-bold text-2xl"
            type="submit"
          >
            Register
          </TheBox>
        </form>
      </div>
    </>
  );
}
