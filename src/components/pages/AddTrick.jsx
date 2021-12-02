import { useState } from "react"
import { useDispatch } from "react-redux";
import { addThreeBallTrick, addFourBallTrick  } from "../../reducers/jugglingTrickSlice";
import { useSelector } from "react-redux";

export default function AddTrick(){
    const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
    const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);
    
    const [newTrick, setNewTrick] = useState('new trick');
    const [numBalls, setNumBalls] = useState('threeBall');
    const [animationLink, setAnimationLink] = useState('');
    const [prereqCheckedState, setPrereqCheckedState] = useState(
        new Array(threeBallTricks.length).fill(false)
    );
    const [prereqs, setPrereqs] = useState([])
    

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        let trick = {}
        console.log(trick)
        console.log(numBalls)
        if(numBalls === "threeBall"){
            trick = {
                "id": threeBallTricks.length,
                "balls": 3,
                "name": newTrick,
                "animation": animationLink,
                "prereq": prereqs
            }

            dispatch(addThreeBallTrick(trick))
        } 
        else if (numBalls === "fourBall") {
            trick = {
                "id": fourBallTricks.length,
                "balls": -1,
                "name": newTrick,
                "animation": animationLink,
                "prereq": prereqs
            }

            dispatch(addFourBallTrick(trick))
        }
        
    }

    const handleThreeBallOnChange = (index) => {
        const preTrick = threeBallTricks[index]
        
        const updatedCheckedState = prereqCheckedState.map((item, ip) => 
            ip === index ? !item : item
        );
        setPrereqCheckedState(updatedCheckedState);

        let newPrereqs;
        console.log(prereqCheckedState)

        if (updatedCheckedState[index]){
            newPrereqs = prereqs?.slice()
            newPrereqs.push([convertBallNumToText(preTrick.balls), preTrick.id])
        } else {
            newPrereqs = prereqs?.filter((tuple) => {
                if (tuple[0] !== convertBallNumToText(preTrick.balls) && tuple[1] !== preTrick.id) {
                    return tuple
                }
            })
        }
        setPrereqs(newPrereqs)

        
    }


    const convertBallNumToText = (value) => {
        if (value === 3) {
            return "threeBall"
        }
        if (value === 4) {
            return "fourBall"
        }
    }

    return (
        <div>
            <h2>Add a new trick</h2>
            <label> trick name</label>
            <form onSubmit={handleSubmit}>
                <h3>Trick Name</h3>
                <input type="text"
                    value = {newTrick}
                    onChange = {(e) => setNewTrick(e.target.value)}
                />
                <select
                    value = {numBalls}
                    onChange={(e) => setNumBalls(e.target.value)}>
                    <option value="threeBall">3 ball</option>
                    <option value="fourBall">4 ball</option>
                </select>
                <h3>animation Link</h3>
                <input type="text"
                    value = {animationLink}
                    onChange = {(e) => setAnimationLink(e.target.value)}
                />
                <h3>Select prerequisites</h3>
                {threeBallTricks.map((trick, index)=>(
                    <div key={trick.balls + trick.name}>
                    <input 
                        type="checkbox" 
                        value={trick} 
                        name={trick.name}
                        checked={prereqCheckedState[index]}
                        onChange={() => handleThreeBallOnChange(index)}
                        />{trick.name}
                    </div>
                ))}
                <button>Add trick</button>

                <p>{newTrick}</p>
                <p>{numBalls}</p>
                <p>{prereqs}</p>
            </form>
        </div>
    )
}