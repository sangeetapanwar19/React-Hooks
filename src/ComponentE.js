import { UserContext,ChannelContext } from "./App";
import React,{useContext} from "react";
function ComponentE(){

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE;