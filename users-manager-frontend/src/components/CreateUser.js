import React, {useState} from "react"
import Footer from "./Footer";
import HeaderCreateUser from "./HeaderCreateUser"
import "../components_styles/create_user.css"

export default function CreateUser(){
    const [formData, setFormData] = useState({
        name:"",
        surname:"",
        registrationDate: "",
        premium:false
    })


    function restartForm(){
        setFormData({
            name:"",
            surname:"",
            registrationDate: "",
            premium:false
        })
    }

    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }

    function addUser(e){
        e.preventDefault()

        const request = new Request("http://localhost:8080/api/users", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type":"application/json"
            }
        });

        fetch(request)
            .then(res => res.json())

        restartForm()
    }

    return(
        <>
            <HeaderCreateUser />
            <div className="create-user">
                <div className="form">
                    <h1 className="form-title">Create a new user</h1>
                    <label>
                        Name
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                    />

                    <label>
                        Surname
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="surname"
                        value={formData.surname}
                    />

                    <label>
                        Registration Date (yyyy-mm-dd)
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="registrationDate"
                        value={formData.registrationDate}
                    />

                    <label>
                        Premium
                    </label>
                    <input
                        type="checkbox"
                        name = "premium"
                        checked = {formData.premium}
                        onChange={handleChange}
                    />

                    <button onClick={addUser} className="createBtn">Add user</button>
                </div>
            </div>
            <Footer />
        </>

    )
}