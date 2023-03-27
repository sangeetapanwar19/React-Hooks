import { useState } from "react";

function HideShow(){
    const[state,setState] = useState(true)
    return(
        <> 
        {
            state?
            <h1>This is HideShow Div container</h1> :null
        }
          
           <button onClick={()=>{setState(false)}}>Hide</button>
           <button onClick={()=>{setState(true)}}>Show</button>
           <button onClick={()=>{setState(!state)}}>Toggle</button>

        </>
    )
}
export default HideShow;