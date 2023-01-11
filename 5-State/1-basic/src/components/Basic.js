import { useState } from "react";

export default function Basic() {
   const [color, setColor] = useState(null)
    
    const changeColor = (e) => {
        setColor(e.target.value)  
    }
    return (
        <>
            <h3 >My favorite color is
                <span style={{ color: color }} > {color}!</span>
            </h3>
        <input  type="color" onChange={(event)=> {
            changeColor(event)
        }} /  > 
        </>

    )
}
