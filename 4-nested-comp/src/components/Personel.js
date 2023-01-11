import React from 'react'
import Frame from './Frame'

export default function Personel() {
    const plist = [
        { "id": 1, "name": "Şamil", "surname": "Yılmaz", "maas": 3000 },
        {
            "id": 2, "name": "Selen", "surname": "Yılmaz",
            "maas": 4500
        }
    ]
    let renderList = plist.map(p => {
        return (
            <Frame key = {p.id}>
                <p>{p.id} {p.name} {p.surname} {p.maas}
                 
                </p>
            </Frame>)
    })
    return (
        <>
            <h3>Personel Listesi</h3>
            {renderList}

        </>

    )
}
