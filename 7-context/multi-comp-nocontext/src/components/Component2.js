import React, {useState} from 'react'
import Component3 from './Component3'

export default function Component2({user}) {
  return (
     <>
      <h3>Component-2</h3>
      <Component3 user = {user}/>
     </>
  )
}
