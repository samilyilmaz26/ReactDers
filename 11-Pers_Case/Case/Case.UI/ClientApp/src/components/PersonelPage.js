import React, { useState, useEffect } from 'react'

export default function PersonelPage({ Personel, text, onChangeText, handlePersonel}) {

    const [graduation, SetGraduation] = useState("")
    const [graduationList, setGraduationList] = useState([{ 'graduation': '' }])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://universities.hipolabs.com/search?country=Turkey`)
            const newData = await response.json();
            setGraduationList(newData);  
        };
        fetchData();
    }, [])

    const [isChecked, setIsChecked] = useState(false);
    const handleOnChange = event => {
        if (event.target.checked) {
            Personel.car = true;

        } else {
            Personel.car = false;
        }
        setIsChecked(current => !current);
    };
    const handleOnChange2 = event => {
        if (event.target.checked) {
            Personel.phone = true;

        } else {
            Personel.phone = false;
        }
        setIsChecked(current => !current);
    };
    const handleOnChange3 = event => {
        if (event.target.checked) {
            Personel.computer = true;

        } else {
            Personel.computer = false;
        }
        setIsChecked(current => !current);
    };


    const handleChange = (event) => {
        console.log(event.target.value)
        SetGraduation(event.target.value)
        Personel.graduation = (event.target.value)

    }
    const saveBtn = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="row">
            <div className="col-md-5">

                <input
                    className="form-control"
                    type="hidden"
                    value={Personel.id}
                    name="id"
                />
                <label>Isim</label>
                <input
                    className="form-control"
                    type="text"
                    value={Personel.firstName}
                    name="firstName"
                    onChange={onChangeText}
                />
                <label>Soyisim</label>
                <input
                    className="form-control"
                    type="text"
                    value={Personel.lastName}
                    name="lastName"
                    onChange={onChangeText}
                />


                <label>Cinsiyet</label><br />
                <input
                    className="form-check-input"
                    type="radio"
                    value="E"
                    checked={"E" === Personel.gender}
                    name="gender"
                    onChange={onChangeText}
                />  Erkek &nbsp;

                <input
                    className="form-check-input"
                    type="radio"
                    value="K"
                    checked={"K" === Personel.gender}
                    name="gender"
                    onChange={onChangeText}
                /> Kadin

                <br />

                <div className="row">
                    <label>Car</label>  
                    <input
                        type="checkbox"
                        checked={Personel.car}
                        value={Personel.car}
                        name="car"
                        onChange={handleOnChange}
                    />
                    <br />
                    <label>Phone</label>  
                    <input
                        type="checkbox"
                        checked={Personel.phone}
                        value={Personel.phone}
                        name="phone"
                        onChange={handleOnChange2}
                    />
                    <br />
                    <label>Computer</label>  
                    <input
                        type="checkbox"
                        checked={Personel.computer}
                        value={Personel.computer}
                        name="computer"
                        onChange={handleOnChange3}
                    />
                    <br />
                </div>
                <label>Mezuniyet</label>
                <br />
                <br />

                <select className="btn btn-secondary dropdown-toggle" onChange={handleChange} name="graduation" defaultValue="Default"  >
                    {Personel.graduation} ? " " <option> {Personel.graduation} </option>; : 
                    {
                        graduationList.map((option) => (

                            <option value={option.name} key={option.id}  > {option.name} </option>
                    ))    
                    }
                </select>
                <br />
                <br />

                <input className="btn btn-success" type="submit" value={text}
                    onClick={() => {
                        handlePersonel();
                        saveBtn();
                    }}
                />
            </div>
        </div>
    )
}