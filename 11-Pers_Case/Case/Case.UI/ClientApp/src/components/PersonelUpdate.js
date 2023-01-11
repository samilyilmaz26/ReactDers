import React, { useEffect, useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PersonelContext } from '../context/PersonelContext';
import { getPersonel, updateSelectedPersonel } from '../functions/http';
import PersonelPage from './PersonelPage';

export default function PersonelUpdate() {
    const context = useContext(PersonelContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [selectedPersonel, setSelectedPersonel] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        gender: "e",
        car: false,
        phone: false,
        computer: false,
        graduation: "",
    });
    useEffect(() => {
        getPersonel(location.state.id).then((res) => {
            setSelectedPersonel(res.data)
        })
    }, [])
    const updatePersonel = async () => {
        try {
            await updateSelectedPersonel(selectedPersonel);
           
            alert(selectedPersonel.firstName + " " + selectedPersonel.lastName + " Güncellendi")
            navigate("/")

        } catch (error) {
            alert(error)
        }
    }
    const onChangeText = (event) => {
        setSelectedPersonel({ ...selectedPersonel, [event.target.name]: event.target.value })
    }
    return (
        <PersonelPage Personel={selectedPersonel} text={"Update Personel"} onChangeText={onChangeText} handlePersonel={updatePersonel} />
    )
}
