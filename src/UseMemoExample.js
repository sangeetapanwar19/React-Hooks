import { useMemo, useState } from "react";

function UseMemoExample(){
    const [counts,setCounts] = useState(0);
    const noRender = useMemo(() => {
        return <div>
            <h1 style={{color:'red'}}>useMemo</h1>
            <h1 style={{color:'red'}}>count{counts}</h1>
        </div>
    },[])
    return(
        <div>
            {noRender}
            <button onClick={() => {setCounts(counts + 1)}}>Update Count</button>
            <h1>useMemo</h1>
            <h1>count{counts}</h1>
        </div>
    )
}
export default UseMemoExample;