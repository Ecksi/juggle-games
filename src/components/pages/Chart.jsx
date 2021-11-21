import React, { useState } from "react"
import jugglingTricks from "../../assets/JugglingTricks/JugglingTricks.json"
import Trick from "../juggling/Trick";

export default function Chart(props) {

  const [threeBallTricks, setThreeBallTricks] = useState(jugglingTricks['3ball'])
  return (
    <div>
      <p>
      {threeBallTricks.map(trick => (
       <Trick trick={trick} />
      ))}
    </p>
    </div>
  );
}
