import { useEffect } from "react";
import { useState } from "react";

const HelloReact = ({nama,umur,buahKegemaran}) => {
    const [isMerah, setMerah] = useState(true);
    const [userInput, setUserInput] = useState("");

    const handleClick = () =>{
        alert("Hello!");
        setMerah((prevSate) => {
            return !prevSate;
        });
    };

    const handleInput = (event) => {
        setUserInput(event.target.value);
    };



    return (
    <>
        <p>Merah: {isMerah.toString()}</p>
        <button onClick={handleClick}>Tukar State</button>
        <input value={userInput} onChange={handleInput} />
        <p>{nama}</p>
        <p>{umur}</p>
        {buahKegemaran.map((buah) => {
            return <p key ={buah}>{buah}</p>;
        })}
    </>

    ) 
};

export default HelloReact;