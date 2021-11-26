import { useState } from "react"
import { useDispatch } from "react-redux";
import { addThreeBallTrick, addFourBallTrick  } from "../../reducers/jugglingTrickSlice";
import { useSelector } from "react-redux";

export default function AddTrick(){

    
    const [newTrick, setNewTrick] = useState('new trick');
    const [numBalls, setNumBalls] = useState('threeBall');
    const [animationLink, setAnimationLink] = useState('');
    //const [prereq, setPrereq] = useState([]);
    const threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);
    const fourBallTricks = useSelector((state) => state.jugglingTrick.fourBall);

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
                "prereq": []
            }

            dispatch(addThreeBallTrick(trick))
        } 
        else if (numBalls === "fourBall") {
            trick = {
                "id": fourBallTricks.length,
                "balls": -1,
                "name": newTrick,
                "animation": animationLink,
                "prereq": []
            }

            dispatch(addFourBallTrick(trick))
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
                <button>Add trick</button>

                <p>{newTrick}</p>
                <p>{numBalls}</p>
            </form>
        </div>
    )
}