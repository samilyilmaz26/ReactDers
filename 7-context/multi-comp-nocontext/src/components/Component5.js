import React, {useState} from 'react'

export default function Component5
({user}) {
  const [usr,setUsr] = useState(user)
  const [dsp , SetDsp] = useState(false)
  function change( ) {
    setUsr("Şamil")
    SetDsp(true)
  }
  return (
     <>
      <h3>Component-5</h3>
      {dsp === true && <p>{usr}</p>}
      {dsp === false && <p>{user}</p>}
       
      <button onClick={change}  type="button">Degiştir</button>
     </>
  )
}
