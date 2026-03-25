import { useState } from "react";

export default function Counter() {
  let [runs, setRuns] = useState(0);
  const handleSingle = () => {
    const SingleRuns = runs + 1;
    setRuns(SingleRuns);
  };
  const handleFour = () => {
    const FourRuns = runs + 4;
    setRuns(FourRuns);
  };
  const handleSix = () => {
    const SixRuns = runs + 6;
    setRuns(SixRuns);
  };
  return (
    <div>
      <h1>Runs Calculator- {runs}</h1>
      <button onClick={handleSingle}>Single runs</button>
      <button onClick={handleFour}>Four runs</button>
      <button onClick={handleSix}>Six runs</button>
    </div>
  );
}
