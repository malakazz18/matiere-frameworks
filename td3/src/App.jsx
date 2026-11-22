import './App.css'
import Header from './components/Header/Header' 
import Destinations  from "../src/destinations/Destinations"
import Exemple from "../src/components/Exemple/Exemple"
import Login from '../src/components/Login/Login'
import Footer from './components/Footer/footer';


function App() {
  

  return (
    <div classname="App">
      <Header />
      <main>
        <Destinations/>
        <Exemple/>
        <Login/>
      </main>
      <Footer />
    </div>
     
     
    
    
  );
}

export default App;
