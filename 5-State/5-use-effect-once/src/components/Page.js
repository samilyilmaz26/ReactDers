import React,{useEffect,useState} from 'react'

export default function Page() {
const [sayac ,SetSayac] = useState(0)
useEffect (()=> {
    setTimeout (() => {
        SetSayac( sayac+1)
    },1000)
} ,[] )
  return (
    <div>
        <h3>Sayac : {sayac}</h3>
    </div>
  )
}
