import { useState } from "react"
import { useDispatch } from "react-redux";
import { addThreeBallTrick, addFourBallTrick  } from "../../reducers/jugglingTrickSlice";
import { useSelector } from "react-redux";

export default function AddTrick(){

    
    const [newTrick, setNewTrick] = useState('new trick');
    const [numBalls, setNumBalls] = useState('threeBall');
    let threeBallTricks = useSelector((state) => state.jugglingTrick.threeBall);

    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        const trick = {
            "id": threeBallTricks.length, // to do dynamically set trick length
            "name": newTrick,
            "animation": "",
            "prereq": []
        }
        console.log(trick)
        console.log(numBalls)
        if(numBalls === "threeBall"){
            dispatch(addThreeBallTrick(trick))
        } 
        else if (numBalls === "fourBall") {
            dispatch(addFourBallTrick(trick))
        }
        
    }


    return (
        <div>
            <h2>Add a new trick</h2>
            <label> trick name</label>
            <form onSubmit={handleSubmit}>
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
            <button>Add trick</button>

            <p>{newTrick}</p>
            <p>{numBalls}</p>
            </form>
        </div>
    )
}