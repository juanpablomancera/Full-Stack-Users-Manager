import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import ListUsers from "./components/ListUsers";
import CreateUser from "./components/CreateUser";
import "./components_styles/app.css"

export default function App(){
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<ListUsers />}/>
              <Route path="/create-user" element={<CreateUser />}/>
          </Routes>
      </BrowserRouter>
        )
}
