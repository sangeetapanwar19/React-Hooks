import {useState} from "react";

function Profile(){
    const [loggedIn,setLoggedIn] = useState(true);
    return(
        <div>
            {loggedIn?<h1>Welcome Component</h1>:<h1>Welcome Guest</h1>}
        </div>
    )
}

export default Profile;