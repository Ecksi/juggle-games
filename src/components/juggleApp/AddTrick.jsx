import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addThreeBallTrick,
  addFourBallTrick,
} from "../../store/reducers/jugglingTrickSlice";

import { API_URL } from "../../app/constants";

export default function AddTrick() {
  const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);

  const [newTrick, setNewTrick] = useState("new trick");
  const [numBalls, setNumBalls] = useState("threeBall");
  const [animationLink, setAnimationLink] = useState("");
  const [prereqCheckedState, setPrereqCheckedState] = useState(
    new Array(threeBallTricks.length).fill(false)
  );
  const [prereqs, setPrereqs] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let trick = {};

    if (numBalls === "threeBall") {
      trick = {
        id: threeBallTricks.length,
        balls: 3,
        name: newTrick,
        animation: animationLink,
        prereq: prereqs,
      };

      dispatch(addThreeBallTrick(trick));
    } else if (numBalls === "fourBall") {
      trick = {
        id: fourBallTricks.length,
        balls: -1,
        name: newTrick,
        animation: animationLink,
        prereq: prereqs,
      };

      dispatch(addFourBallTrick(trick));
    }
    console.log(trick)
    axios.post(`${API_URL}/api/v1/tricks/addTrick`, trick)
  };

  const handlePreReqOnChange = (index) => {
    const preTrick = threeBallTricks[index];

    const updatedCheckedState = prereqCheckedState.map((item, ip) =>
      ip === index ? !item : item
    );
    setPrereqCheckedState(updatedCheckedState);

    let newPrereqs = [];

    // how can this be written to fix filter needs return value error
    if (updatedCheckedState[index]) {
      newPrereqs = prereqs?.slice();
      newPrereqs.push(preTrick.id);
    } else {
      newPrereqs = prereqs?.filter(value => {
        if (value !== preTrick.id) {
          return value;
        }
        // only here to remove error. refactor~
        return null;
      });
    }

    setPrereqs(newPrereqs);
  };

  // Currently not being used
  // const convertBallNumToText = (value) => {
  //   if (value === 3) {
  //     return "threeBall";
  //   }
  //   if (value === 4) {
  //     return "fourBall";
  //   }
  // };

  return (
    <div>
      <h2>Add a new trick</h2>
      <label> trick name</label>
      <form onSubmit={handleSubmit}>
        <h3>Trick Name</h3>
        <input
          type="text"
          value={newTrick}
          onChange={(e) => setNewTrick(e.target.value)}
        />
        <select value={numBalls} onChange={(e) => setNumBalls(e.target.value)}>
          <option value="threeBall">3 ball</option>
          <option value="fourBall">4 ball</option>
        </select>
        <h3>animation Link</h3>
        <input
          type="text"
          value={animationLink}
          onChange={(e) => setAnimationLink(e.target.value)}
        />
        <h3>Select prerequisites</h3>
        {threeBallTricks.map((trick, index) => (
          <div key={trick.balls + trick.name}>
            <input
              type="checkbox"
              value={trick}
              name={trick.name}
              checked={prereqCheckedState[index]}
              onChange={() => handlePreReqOnChange(index)}
            />
            {trick.name}
          </div>
        ))}
        <button>Add trick</button>
        <p>{newTrick}</p>
        <p>{numBalls}</p>
        <p>{prereqs}</p>
      </form>
    </div>
  );
}
