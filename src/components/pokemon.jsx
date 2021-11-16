import React, { useState } from 'react';

const Pokemon = ({number, type, setTypes}) => {
    const [type1, setFirstType] = useState("");
    const [type2, setSecondType] = useState("");

    const handleSubmit = () => {
        setTypes(prevType => [...prevType, type1]);
        type2 ? setTypes(prevType => [...prevType, type2]): console.log("No second type");
    }

    return (
        <div>
            <form>
                <label>
                    {number}. Pokemon's First Weakness:
                    <input type="text" onChange={(e) => {
                        setFirstType(e.target.value)
                    }}></input>
                </label>
            </form>
            <form>
                <label>
                    Pokemon's Second Weakness (if applicable):
                    <input type="text" onChange={(e) => {
                        setSecondType(e.target.value)
                    }}></input>
                </label>
            </form>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Pokemon;