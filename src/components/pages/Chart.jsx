import React, { useState } from "react"
import jugglingTricks from "../../assets/JugglingTricks/JugglingTricks.json"
import Trick from "../juggling/Trick";
import { List } from '@material-ui/core';

export default function Chart(props) {

  const [threeBallTricks, setThreeBallTricks] = useState(jugglingTricks['3ball'])
  return (
    <div>
      <List>
      {threeBallTricks.map(trick => (
       <Trick trick={trick} />
      ))}
    </List>
    </div>
  );
}
