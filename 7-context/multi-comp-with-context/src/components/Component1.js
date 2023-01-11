import React, {useContext} from 'react'
import { UserContext } from '../context/context'
import Component2 from './Component2'
 

export default function Component1() {
  const {user  } =   useContext(UserContext) 
 
  return (
    <div>
        <h3>Component-1</h3>
        <p>Hello  {user} </p>
        <Component2 />
    </div>
  )
}
