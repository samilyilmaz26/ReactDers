import React, {useContext } from 'react'
import { UserContext } from '../context/context'
export default function Component5() {
  const {user , setUser} =   useContext(UserContext) 
    function change() {
       var input = document.getElementById("name").value
       setUser(input)
    }
  return (
    <div>
        <h3>Component-5</h3>
        <p>Hello  {user} again</p>
        <input    id= "name" />
        <button onClick={change}
        type='button'>Change</button>
    </div>
  )
}
