import { useState } from "react";
function Login()
{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[erreur,setErreur]=useState({});

    function handleSubmit(e)
    {
        e.preventDefault();
        let newErreur={};
        if(email.trim()==="")
            newErreur.email="Veuillez introduire un Email !";
        else if(! /\S+@+\S+\.+\S/.test(email))
            newErreur.email="Veuillez introduire un Email valide !";
        if(password.trim()==="")
            newErreur.password="Veuillez introduire le mot de passe !";
        else if(password.length<8)
            newErreur.password="la taille du mot de passe doit être supérieur ou égale à 8 !";
        else if(!/[A-Z]/.test(password))
            newErreur.password="Votre mot de passe doit contenir au moins une lettre majuscule !";
        else if(!/[0-9]/.test(password))
            newErreur.password="Votre mot de passe doit contenir au moins un chiffre !";
        else if(!/[^a-zA-Z0-9]/.test(password))
            newErreur.password="Votre mot de passe doit contenir au moins un caractére spécial !";
        if(Object.keys(newErreur).length===0)
        {
            alert("enregistrement avec succes !");
            console.log("Email:" + email+ "password:"+ password);
        }
        else
            {
                setErreur(newErreur);
                console.log(newErreur);
            }
    }
return(
    <div>
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="email">mail</label>
                <input type="text" 
                       name="email" 
                       id="email"
                       value={email}
                       onChange={(e)=>setEmail(e.target.value)} 
                />
                {
                    erreur.email && 
                    (<span>{erreur.email}</span>)
                }
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" 
                       name="password" 
                       id="password" 
                       value={password}
                       onChange={(e)=>setPassword(e.target.value)}
                />
                {
                    erreur.password && 
                    (<span>{erreur.password}</span>)
                }
            </div>
            <div>
                <button type="submit">enregistrer</button>
            </div>
            

        </form>
    </div>
);
}
export default Login;