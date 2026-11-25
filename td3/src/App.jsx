import './App.css'
import Header from './components/Header/Header' 
import Destinations  from "../src/destinations/Destinations"
import Exemple from "../src/components/Exemple/Exemple"
import Login from '../src/components/Login/Login'
import Accueil from '../src/components/Acceuil/Accueil'
import Apropos from '../src/components/Apropos/Apropos'
import Footer from './components/Footer/footer';


function App() {
  

  return (
    <div classname="App">
      <Header />
      <main>
        <Destinations/>
        <Exemple/>
        <Login/>
        <Accueil/>
        <Apropos/>
      </main>
      <Footer />
    </div>
     
     
    
    
  );
}

export default App;
