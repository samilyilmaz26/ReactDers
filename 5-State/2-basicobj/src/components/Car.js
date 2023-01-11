import React, {useState} from 'react'

export default function Car() {
    const [model, setModel] =useState("Mustang")
    const [car, setCar] = useState({
        brand: "Ford",
        model: model,
        year: "1964",
        color: "red"
      });
    const updateModel= (e) => {
       setCar(previousState => {
       return {...previousState, model: e.target.value}
      })
    }
  return (
    <>
   <h3>My {car.brand}</h3>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <input   type="text" onChange={(event)=> {
        updateModel(event)
      }} />
      {/* <button type ="button"
        onClick={()=> updateModel("Fiesta") }
      >Update Model</button> */}
    </>
  )
}
