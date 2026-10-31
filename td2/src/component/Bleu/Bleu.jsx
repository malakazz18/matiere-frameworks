// on a deux maniéres pour importer le style css dans un composant React, soit en important le fichier css directement dans le fichier jsx, soit en utilisant la balise style dans le fichier jsx.
// fichier css importé directement dans le fichier jsx ou on l'importe localement dans le fichier jsx
//si on a un fichier css global, on peut l'importer dans le fichier index.css ou App.css pour qu'il soit appliqué à tous les composants de l'application.
import styles from "./Bleu.module.css"
//style c'est une variable qu'on a mis le contenu de Bleu.module.css, on peut utiliser cette variable pour appliquer les styles aux éléments du composant.
// "." dans le chemin d'importation signifie que le fichier est dans le même dossier que le fichier bleu.mdule.css, 
function Bleu() {
// la fonction Bleu est un composant React qui ne retourne actuellement rien. Il est exporté par défaut pour être utilisé dans d'autres parties de l'application.
// la fonction doit etre  de meme nom que le fichier pour que l'importation fonctionne correctement.
    return(
        <h1 className ={styles.titre} > Mon titre bleu </h1>
    );
}
export default Bleu;// pour afficherle composant bleu et on met le nom du composant dans le fichier App.jsx pour l'importer et l'utiliser dans l'application.