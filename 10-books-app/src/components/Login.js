import React, { useEffect, useState } from 'react'

export default function Login() {
    // Api den user çek
    const [user, setUser] = useState({
        "id": 0,
        "name": "",
        "role": ""
    })
    const [loggedin, setLoggedin] = useState(false)
    const rtnUser = {
        "id": 1,
        "name": "samil@abc.com",
        "role": "user"
    }
    useEffect(() => {
        if (rtnUser != null) {
            setUser(rtnUser)
            setLoggedin(true)
            console.log(loggedin)
            //     const myJSON = JSON.stringify(myObj);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("loggedin", JSON.stringify(loggedin))
        }

    }, [loggedin])
    return (
        <div>Login</div>
    )
}
