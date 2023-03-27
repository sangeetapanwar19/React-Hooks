import { useState } from "react";

function User(props){
    const [userdetail,updateUserDetail] = useState('sangeeta');
    function updateName(){
        updateUserDetail('panwar');
    }
    return(
        <>
        <h1>Hello {userdetail}</h1>
        <button onClick={updateName}>Update Name</button>
        <p>{props.name}</p>
        <p>{props.surname}</p>
        </>
    )
}

export default User;