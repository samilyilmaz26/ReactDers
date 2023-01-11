import React, {useState,useEffect} from 'react'

export default function Page() {
    const [counter, setCounter] = useState(5);
    useEffect(() => {
      const timer = counter > 0 &&    setTimeout(() => setCounter(counter - 1), 1000);
      return ()=> clearTimeout(timer)
    }, [counter]);
    const repeat=()=>  {
        clearTimeout(setCounter(5))
    }
//    useEffect(()=> {
//     if (counter >= 0) {
//         setTimeout(()=> {
//              setCounter(counter-1)
//         },1000)
//     } 
//     else {
//         alert("Süre Doldu")
//     }
//    },[counter])
    
  return (
    <div>
     <h3>Onaylamak için {counter} süren var </h3>
     {counter  ==  0 && <h3>Süre Doldu</h3>  }
   
     <button   onClick={repeat} type='button'>Tekrar Gönder</button>
    </div>
  )
}
