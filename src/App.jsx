import React, { Suspense } from "react";
import Countries from "./Countries/Countries";
import "./App.css";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading Flags...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
};

export default App;
