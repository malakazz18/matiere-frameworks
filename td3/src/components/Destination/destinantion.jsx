import styles from "./Destination.module.css";

function destination(props){
    return(
        <div className={styles.destination}>
            <img classname={styles.image} src={props.image} alt={props.nom} />
            <h2 className={styles.titre}>{props.nom} </h2>
            <h3 className={styles.pays}>{props.pays}</h3>
            <p className={styles.description}>{props.description}</p>
            <h3 className={styles.prix}>{props.prix}</h3>
        </div>
    )
}
export default destination;