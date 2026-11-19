import { useState } from "react";
import styles from './Reservation.module.css'

function Reservation(){
    const[nom,setNom]=useState("");
    const[email,setEmail]=useState("");
    const[telephone,setTelephone]=useState("");
    const[erreurs,setErreurs]=useState({});
    const [showPopup,setShowPopup]=useState(false);


return(
    <section className={styles.container}>
        <h2>Reserver votre voyage</h2>
        <form onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label>Nom et prénom : </label>
              <input 
                type="text"
                className={erreurs.nom ? styles.inputError : ""}
                value={nom}
                onChange={(e)=> {setNom(e.target.value);  effacerErreur("nom");}}
                placeholder="Votre nom et prénom "/>
              {erreurs.nom && (
                 <span span className={styles.errorMessage}>
                     {erreurs.nom} </span>)}
            </div>
        </form>

    </section>
)}
export default Reservation;