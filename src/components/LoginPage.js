import React, {useState} from 'react'
import styles from './LoginPage.module.css'

const LoginPage = (props)=>{
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("")

const handleForm =(event)=>{
        event.preventDefault();
        const newUser = {firstName, lastName, email, password, confPassword}
        console.log(newUser)
    }
    return(
        <div>
            <form onSubmit={handleForm}>
                <div className={styles.inputDiv}>
                    <label> First name: </label>
                    <input type="text" onChange={(event) => setFirstName(event.target.value)} value={firstName}></input>
                </div>
                <div className={styles.inputDiv}>
                    <label> Last name: </label>
                    <input type="text" onChange={(event) => setLastName(event.target.value)} value={lastName}></input>
                </div>
                <div className={styles.inputDiv}>
                    <label> Email: </label>
                    <input type="email" onChange={(event) => setEmail(event.target.value)} value={email}></input>
                </div>
                <div className={styles.inputDiv}>
                    <label> Password: </label>
                    <input type="password" onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <div className={styles.inputDiv}>
                    <label> Confirm Password: </label>
                    <input type="password" onChange={(event)=> setConfPassword(event.target.value)}></input>
                </div>
                <div>
                    <input type="submit"></input>
                </div>

            </form>
            <div>
                <h1> Your Form Data: </h1>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{email}</p>
                <p>{password}</p>
                <p>{confPassword}</p>
                </div>
        </div>
    )

}
export default LoginPage