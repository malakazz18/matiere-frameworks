import { useState } from "react";
function Formulaire (){
    const {Nom,setNom}=useState("");
    const {Age,setAge}=useState("");

    function handleSubmit(e){
     e.preventdefault();
     console.log(e)
     alert("bonjour" + Nom + ","+ "vous avez" + Age + "ans");
     setNom("");
     setAge("");
    }

    return (
      <div>
          <h2>
             Formulaire d'inscription 
          </h2>
            <form onSubmit={handleSubmit}>
              <label>Nom :</label>
              <input type="text" value={Nom} onChange={(e)=>setNom(e.target.value)} /> 
               <br></br>
               <label>Age :</label>
               <input type="text" value={Age} onChange={(e)=>setNom(e.target.value)} /> 
              
            </form>

        </div>
 )
}
export default Formulaire;
