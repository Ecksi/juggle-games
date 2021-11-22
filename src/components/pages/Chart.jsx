import React, { useState } from "react"
import jugglingTricks from "../../assets/JugglingTricks/JugglingTricks.json"
import Trick from "../juggling/Trick";
import { List } from '@material-ui/core';

export default function Chart(props) {

  const [allBallTricks, setAllBallTricks] = useState(jugglingTricks)
  return (
    <div>
            <h3>3-ball tricks</h3>
      <List>
      {allBallTricks['3ball'].map(trick => (
       <Trick trick={trick} numBalls={'3ball'} />
      ))}
    </List>
    <h3>4-ball tricks</h3>
    <List>
      {allBallTricks['4ball'].map(trick => (
       <Trick trick={trick} numBalls={'4ball'} />
      ))}
    </List>
    <h3>5-ball tricks</h3>
    <List>
      {allBallTricks['5ball'].map(trick => (
       <Trick trick={trick} numBalls={'5ball'} />
      ))}
    </List>
    </div>
  );
}
