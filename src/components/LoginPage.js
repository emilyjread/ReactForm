import React, {useState} from 'react'
import styles from './LoginPage.module.css'

const LoginPage = (props)=>{
    const [errorMessage, setErrorMessage]=useState("");
    
    const [firstName, setFirstName]=useState("");
    const [firstNameIsValid, setFirstNameIsValid]=useState(false);
    const [fnerror, setFnerror]=useState("")

    const [lastName, setLastName]=useState("");
    const [lastNameIsValid, setLastNameIsValid]=useState(false);
    const [lnerror, setLnerror]=useState("")

    const [email, setEmail]=useState("");
    const [emailIsValid, setEmailIsValid]=useState(false);
    const [emerror, setEmerror]=useState("")

    const [password, setPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [pwerror, setPwerror]=useState("")

    const [confPassword, setConfPassword] = useState("")
    const [confPasswordIsValid, setConfPasswordIsValid] = useState(false)
    const [pwcerror, setPwcerror]=useState("")


const handleForm =(event)=>{
        event.preventDefault();
        console.log(firstNameIsValid, lastNameIsValid, emailIsValid, passwordIsValid, confPasswordIsValid)
        if(firstNameIsValid===false){
            setFnerror("First Name must be at least 3 characters")
        }
        if(lastNameIsValid===false){
            setLnerror("Last Name must be at least 3 characters")
        }
        if(emailIsValid===false){
            setEmerror("Email must be at least 8 characters")
        }
        if(passwordIsValid===false){
            setPwerror("Password must be at least 8 characters")
        }
        if(confPasswordIsValid===false){
            setPwcerror("Passwords must match")
        }
        if(firstNameIsValid===true && 
            lastNameIsValid===true &&
            emailIsValid===true &&
            passwordIsValid===true && 
            confPasswordIsValid===true
        ){
            const newUser = {firstName, lastName, email, password, confPassword}
            setFnerror("")
            setLnerror("")
            setEmerror("")
            setPwerror("")
            setPwcerror("")
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfPassword("")
            console.log(newUser)
            setErrorMessage("Thank you for submitting your form!")
        } 
    }
const handleFirstName=(event)=>{
    setFirstName(event.target.value);
    if (event.target.value.length>2){
        setFirstNameIsValid(true);
    }
}
const handleLastName=(event)=>{
    setLastName(event.target.value);
    if (event.target.value.length>2){
        setLastNameIsValid(true);
    }
}
const handleEmail=(event)=>{
    setEmail(event.target.value);
    if (event.target.value.length>5){
        setEmailIsValid(true);
    }
}
const handlePassword=(event)=>{
    setPassword(event.target.value);
    if (event.target.value.length>8){
        setPasswordIsValid(true);
    }
}
const handleConfPassword=(event)=>{
    setConfPassword(event.target.value);
    if (event.target.value==password){
        setConfPasswordIsValid(true);
    }
}

    return(
        <div>
            <div>
                {errorMessage}
            </div>
            <form onSubmit={handleForm}>
                <div className={styles.inputDiv}>
                    <label> First name: </label>
                    <input type="text" onChange={handleFirstName} value={firstName}></input>{firstNameIsValid.state} 
                </div>
                <p className={styles.error}>{fnerror}</p>
                <div className={styles.inputDiv}>
                    <label> Last name: </label>
                    <input type="text" onChange={handleLastName} value={lastName}></input>
                </div>
                <p className={styles.error}>{lnerror}</p>
                <div className={styles.inputDiv}>
                    <label> Email: </label>
                    <input type="email" onChange={handleEmail} value={email}></input>
                </div>
                <p className={styles.error}>{emerror}</p>
                <div className={styles.inputDiv}>
                    <label> Password: </label>
                    <input type="password" onChange={handlePassword} value={password}></input>
                </div>
                <p className={styles.error}>{pwerror}</p>
                <div className={styles.inputDiv}>
                    <label> Confirm Password: </label>
                    <input type="password" onChange={handleConfPassword} value={confPassword}></input>
                </div>
                <p className={styles.error}>{pwcerror}</p>
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