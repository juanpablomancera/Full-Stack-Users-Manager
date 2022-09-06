import React, {useState} from "react"

export default function UpdateUser(props){
    const [formData, setFormData] = useState({
        id:props.id,
        name: props.name,
        surname: props.surname,
        registrationDate: props.registrationDate,
        premium:props.premium
    })


    function handleChange(e){
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]:type === "checkbox" ? checked : value
            }
        })
    }

    function updateUser(e){
        e.preventDefault()

        const request = new Request("http://localhost:8080/api/users", {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type":"application/json"
            }
        });

        fetch(request)
            .then(res => res.json())

        props.update(prev => !prev)
    }

    return(
        <div className="updateUser">
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
                className="checkbox"
                type="checkbox"
                name = "premium"
                checked = {formData.premium}
                onChange={handleChange}
            />

            <button onClick={updateUser} className="updateClassBtn">Update user</button>
        </div>
    )
}