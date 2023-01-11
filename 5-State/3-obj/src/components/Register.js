import React from 'react'
import { useState } from 'react'

export default function Register() {
    const [user, setUser]= 
    useState({"fullname": "","email": "","password":"" }) 
const  change = (event)=>  {
    setUser ({...user, [event.target.name]: event.target.value})
    console.log(user)
 }
 const submit = (event) => {
    event.preventDefault()
    console.log("User : ", user)
 }
  
  return (
   <>
   <form onSubmit={submit}>
    <label htmlFor="fullname">Full Name </label><br/>
    <input type="text" onChange={change} name ="fullname"  /><br/>
    <label htmlFor="">Email</label><br/>
    <input type="text" onChange={change} name="email" /><br/>
    <label htmlFor="">Password</label><br/>
    <input type="password" onChange={change} name="password" /><br/>
    <button  >Gönder</button>
   </form>
   </>
  )
}
