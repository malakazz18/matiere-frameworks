import styles from "./Destination.module.css";
import { useState } from "react";
function destination(props){
    const [afficher,setAfficher]=useState(false);
    const [favoris,setFavoris]=useState("🤍");
    function swap(){
        setAfficher(!afficher);
    }
    function swapf(){
        if (favoris==="🤍")
            setFavoris("❤️")
        else 
            setFavoris("🤍");
    }
    return(
        <div className={styles.destination}>
            <img classname={styles.image} src={props.image} alt={props.nom} />
            <div className={styles.content}>
                <h2 className={styles.titre}>{props.nom} </h2>
                <h3 className={styles.pays}>{props.pays}</h3>
                {afficher && (<p className={styles.description}>{props.description}</p>)}
                <h3 className={styles.prix}>{props.prix}</h3>
                <button onClick={swap}>
                    {afficher?"Masquer":"Afficher"}
                </button>
                <button onClick={swapf}> 
                    {favoris}
                </button>
            </div>
        </div>
    )
}
export default destination;
