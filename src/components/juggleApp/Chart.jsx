import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJugglingTricksData } from "../../store/reducers/jugglingTrickSlice";
import { Accordion, AccordionDetails, AccordionSummary, List } from "@material-ui/core";
import Trick from "./Trick";

export default function Chart(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJugglingTricksData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
  const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);

  // State management for option 2
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <div>
      <h1>OPTION 1</h1>
      <Accordion>
        <AccordionSummary>
          <h3>3-ball tricks</h3>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {!!threeBallTricks &&
              threeBallTricks.map((trick, i) => (
                <Trick key={i} trick={trick} numBalls={"threeBall"} />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <h3>4-ball tricks</h3>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {!!fourBallTricks &&
              fourBallTricks.map((trick, i) => (
                <Trick key={i} trick={trick} numBalls={"fourBall"} />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <h3>5-ball tricks</h3>
        </AccordionSummary>
        <AccordionDetails>
          <span>ThErE r n0 tRicKs hErE~</span>
        </AccordionDetails>
      </Accordion>

      {/* OPTION 2 */}
      <h1>OPTION 2</h1>
      <Accordion expanded={expanded === 'panel-1'} onChange={handleChange('panel-1')}>
        <AccordionSummary>
          <h3>3-ball tricks</h3>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {!!threeBallTricks &&
              threeBallTricks.map((trick, i) => (
                <Trick key={i} trick={trick} numBalls={"threeBall"} />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel-2'} onChange={handleChange('panel-2')}>
        <AccordionSummary>
          <h3>4-ball tricks</h3>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {!!fourBallTricks &&
              fourBallTricks.map((trick, i) => (
                <Trick key={i} trick={trick} numBalls={"fourBall"} />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel-3'} onChange={handleChange('panel-3')}>
        <AccordionSummary>
          <h3>5-ball tricks</h3>
        </AccordionSummary>
        <AccordionDetails>
          <span>ThErE r n0 tRicKs hErE~</span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
