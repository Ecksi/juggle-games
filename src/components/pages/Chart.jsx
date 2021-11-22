import React from "react"
import { Link } from "react-router-dom";
import tricks from "../../assets/JugglingTricks/JugglingTricks.json"

export default function Chart() {
  return (
    <div>
      <h3>3-ball tricks</h3>
      {tricks['3ball'].map(trick => (
        <Link
          to={`/3ball/${trick.name}`}
        >
        <button 
          style={{ 
            height: 100,
            width: 100,
            cursor: 'pointer',
            'border-radius': 50,
          }}
          onClick={() => console.log('hi')}
        >{trick.name}</button>
        </Link>
      ))}
      <hr />
      <h3>4-ball tricks</h3>
      {tricks['4ball'].map(trick => (
        <button 
          style={{ 
            height: 100,
            width: 100,
            cursor: 'pointer',
            'border-radius': 50,
          }}
          onClick={() => console.log('hi')}
        >{trick.name}</button>
      ))}
      <hr />
      <h3>5-ball tricks</h3>
      {tricks['5ball'].map(trick => (
        <button 
          style={{ 
            height: 100,
            width: 100,
            cursor: 'pointer',
            'border-radius': 50,
          }}
          onClick={() => console.log('hi')}
        >{trick.name}</button>
      ))}
    </div>
  );
}
