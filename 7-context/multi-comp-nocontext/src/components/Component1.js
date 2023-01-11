import React, {useState} from 'react'
import Component2 from './Component2'

export default function Component1({user}) {
  return (
     <>
      <h3>Component-1</h3>
      <p>Hello {user}</p>
      <Component2 user = {user}/>
     </>
  )
}
