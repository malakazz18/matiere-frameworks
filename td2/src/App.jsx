//import Bleu from "./component/Bleu/Bleu";
//import Rouge from "./component/Rouge/Rouge";
//import Vert from "./component/Vert/Vert";
import './App.css';//importation du fichier css global 
function App() {
    const x=0;
    return (
        <>  
        <h1 className={x===0 ? "rouge" : "bleu"}> ceci est un titre </h1>
 {/* pour afficher le bleu, le rouge et le vert dans le navigateur, on importe les composants dans App.jsx */}
        {/*<Bleu />
        <Rouge />
        <Vert />*/}
        
        </>
    );
}
export default App;