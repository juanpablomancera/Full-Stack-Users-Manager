import React, {useState} from "react";
import UpdateUser from "./UpdateUser";

export default function User(props){
    const {name, surname, registrationDate, premium, id} = props
    const [update, setUpdate] = useState(false)

    function handleUpdate(){
        setUpdate(prevState => !prevState)
    }

    function handleDelete(){
        const request = new Request("http://localhost:8080/api/users/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        });

        fetch(request)
            .then(res => res.json())
    }

    return (
        <div>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{registrationDate}</p>
            <p>{premium === true ? "True" : "False"}</p>
            <button onClick={handleUpdate}>{update ? "Close" : "Update"}</button>
            <button onClick={handleDelete}>Delete</button>
            {update ? <UpdateUser
                name = {name}
                surname = {surname}
                registrationDate = {registrationDate}
                premium = {premium}
                id = {id}
                update = {setUpdate}
            />
                : <div></div>}
        </div>
    )
}