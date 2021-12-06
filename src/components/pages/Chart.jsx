import Trick from "../juggling/Trick";
import { List } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJugglingTricksData } from "../../reducers/jugglingTrickSlice";

export default function Chart(props) {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchJugglingTricksData())
  }, [])

  const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);

  return (
    <div>
      <h3>3-ball tricks</h3>
      <List>
        {!!threeBallTricks && threeBallTricks.map((trick) => (
          <Trick trick={trick} numBalls={"threeBall"} />
        ))}
      </List>
      <h3>4-ball tricks</h3>
      <List>
        {fourBallTricks.map((trick) => (
          <Trick trick={trick} numBalls={"fourBall"} />
        ))}
      </List>
      <h3>5-ball tricks</h3>
      {/* <List>
        {allBallTricks["5ball"].map((trick) => (
          <Trick trick={trick} numBalls={"5ball"} />
        ))}
      </List> */}
    </div>
  );
}
