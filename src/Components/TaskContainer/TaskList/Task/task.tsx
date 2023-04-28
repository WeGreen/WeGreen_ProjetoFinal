import { StyledTask } from "./taskStyled";
import NoCheck from "../../../../assets/Icon__NoCheck.png"
import Check from "../../../../assets/Icon__Check.png"
import { useState } from "react";

export const Task = () => {
    const [ checkValue, setCheckValue] = useState(false)
    const colorCheck = "done";
    const colorNoCheck = "notDone";
    
    const image = checkValue ? Check : NoCheck
    const color = checkValue ? colorCheck : colorNoCheck


    return(
        <>
            <StyledTask $buttonStyle={color} onClick={() => setCheckValue(!checkValue)}>
                <div className="check__figure">
                    <figure>
                        <img src={image} alt="" />
                    </figure>
                </div>

                <div className="check__title">
                    <h3>Regar a coves</h3>
                </div>

                <div className="check__edit">
                    <p> ... </p>
                </div>

            </StyledTask>

        </>    
    )
}