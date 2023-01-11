import {useState, useEffect}from 'react'

export default function Page()  {
 const  [count , setCount] = useState(0)
    useEffect(()=> {
        setTimeout(()=> {
            setCount(  count+ 1)
        },1000)
    })

  return (
   <>
     <h3>Sayac : {count}</h3>
   </>
  )
}
