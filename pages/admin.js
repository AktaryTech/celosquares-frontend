import React, { useState, useCallback } from "react";
import AppNavigation from "../components/AppNavigation";

export default function Admin() {
  return (
    <>
      <div className="container">
        <AppNavigation />
        {/* charityAddr: "",
    betSize: "",
    quarterPoolAllocation: "",
    finalPoolAllocation: "" */}

        <form onSubmit="Foo" className="flex flex-col">
          <label htmlFor="charityAddr">Charity Address: </label>
          <input id="charityAddr" type="text" autoComplete="name" required />
          <label htmlFor="betSize">Bet Size: </label>
          <input id="betSize" type="text" autoComplete="name" required />
          <label htmlFor="quarterPoolAllocation">Q Pool Alloc: </label>
          <input id="quarterPoolAllocation" type="text" autoComplete="name" required />
          <label htmlFor="finalPoolAllocation">F Pool Alloc: </label>
          <input id="finalPoolAllocation" type="text" autoComplete="name" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}
