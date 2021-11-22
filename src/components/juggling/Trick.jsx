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
        {trick.prereq.map(req => <p>{req}</p>)}
      </div>
    </React.Fragment>
  );
}
