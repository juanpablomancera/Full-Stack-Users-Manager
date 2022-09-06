import React, {useState} from "react"
import User from "./User";
import Footer from "./Footer";
import HeaderListUsers from "./HeaderListUsers"

export default function ListUsers(){
    const [users, setUsers] = useState([""])


        fetch("http://localhost:8080/api/users")
            .then(res => res.json())
            .then(data => setUsers(data))

    return (
        <>
            <HeaderListUsers />

            {
                users.map(user =>{
                    return (
                        <User
                            key = {user.id}
                            name = {user.name}
                            surname = {user.surname}
                            registrationDate = {user.registrationDate}
                            premium = {user.premium}
                            id = {user.id}
                        />
                    )
                })
            }

            <Footer />
        </>
    )
}