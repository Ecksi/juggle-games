import React from 'react';
import { useParams } from 'react-router-dom';
import tricks from '../../assets/JugglingTricks/JugglingTricks.json'

export default function Trick() {
  const params = useParams();
  const trick = tricks[params.numOfBalls].find(trick => trick.name === params.trick)

  return (
    <React.Fragment>
      <h3>{trick.name}</h3>
      <div>
        <h4>Prerequisites:</h4>
        {trick.prereq.map(req => {
          let balls = req[0];
          let trickIndex = req[6];

          return <p>{tricks[`${balls}ball`][trickIndex]['name']}</p>
        })}
      </div>
    </React.Fragment>
  );
}
