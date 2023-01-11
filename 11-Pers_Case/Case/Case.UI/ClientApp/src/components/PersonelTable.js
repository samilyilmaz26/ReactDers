import React from 'react'
import { deleteSelectedPersonel } from '../functions/http'
import { PersonelContext } from '../context/PersonelContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import PersonelCreate from './PersonelCreate';

export default function PersonelTable({ heading, Personels }) {
    const context = useContext(PersonelContext)
    const navigate = useNavigate()
    const createPersonel=()=>{
        navigate("Personel/Create")
    }
   
    const deletePersonel = (id) => {
        try {
            deleteSelectedPersonel(id)
            context.deletePersonel(id)
        } catch (error) {
            alert(error)
        }
    }
    const updatePersonel = (id) => { 
        navigate("/Personel/Update/:" + id, {
            state: { id: id }
        })

    }
    var render = Personels.map((b) => {
        
        return (
            <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.firstName}</td>
                <td>{b.lastName}</td>
                <td>{b.gender}</td>
                <td>{String(b.car)}</td>
                <td>{String(b.phone)}</td>
                <td>{String(b.computer)}</td>
                <td>{b.graduation}</td>
                
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => deletePersonel(b.id)}
                    >Delete Personel</button>
                </td>
                <td>
                    <button 
                        className="btn btn-success"
                        onClick={() => updatePersonel(b.id)}
                    >Update Personel</button>
                </td>
            </tr>
        )
    })
    return (
        <>
            <div className='row'>
                <div className='col-md-7'>
                    <h3>{heading}</h3>
                  
                    <button 
                        className="btn btn-primary"
                        onClick={() => createPersonel()}
                    >Create Personel</button>

                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Car</th>
                                <th>Phone</th>
                                <th>Computer</th>
                                <th>Graduation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {render}
                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}
