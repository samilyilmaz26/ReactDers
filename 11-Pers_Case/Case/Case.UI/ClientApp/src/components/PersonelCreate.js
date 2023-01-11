import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { addSelectedPersonel } from '../functions/http';
import PersonelPage from './PersonelPage';
import { PersonelContext } from "../context/PersonelContext"

export default function PersonelCreate() {
  const navigate = useNavigate()
  const context = useContext(PersonelContext)
  const [newPersonel, setNewPersonel ] = useState({
    firstName:"",
    lastName:"",
    gender:"e",
      car: false,
      phone: false,
      computer: false,
    graduation:""
  });
  const createPersonel=async()=>{
    try {
      const id =await addSelectedPersonel(newPersonel);
      context.addPersonel({...newPersonel,id:id})
      navigate("/")
      
    } catch (error) {
      
    }
  }
  const onChangeText=(event)=>{
    setNewPersonel({...newPersonel,[event.target.name]:event.target.value})
  }
  return (
      <PersonelPage Personel={newPersonel} text={"Create Personel"} onChangeText={onChangeText} handlePersonel={createPersonel}  />
  )
}
