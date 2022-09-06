import React, {useState} from "react";
import UpdateUser from "./UpdateUser";
import "../components_styles/user.css"

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
        <div className="user">
            <div className="userData">
                <p>Name: {name}</p>
                <p>Surname: {surname}</p>
                <p>Registration Date: {registrationDate}</p>
                <p>Premium: {premium === true ? "Yes" : "No"}</p>
            </div>
            <button onClick={handleUpdate} className={update ? "closeBtn" : "updateBtn"}>{update ? "Close" : "Update"}</button>
            <button onClick={handleDelete} className={update ? "closeDeleteBtn" : "deleteBtn"} >Delete</button>
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