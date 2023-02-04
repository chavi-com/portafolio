import logo from './logo.svg';
import './App.css';
import Portada from './components/imagenportada/imagenportada.js';
import './assets/imagen/binary.jpg';
import Fotoperfil from './components/fotoperfil/fotoperfil';
import Aptitudes from './components/aptitudes/aptitudes.js';
import BasicExample from './components/narvar/navbar';
import UncontrolledExample from './components/repositorios/sliderRepos';
import PokemonList from './components/pokemon/pokemon.js';
import Game15 from './components/game15/game15.js';
import Footer from './components/footer/footer.js';
import SocialButtons from './components/botones-contacto/contactobtn.js';
import Buttonslin from './components/botonlinkt/linktbtn.js';
import Buttongml from './components/btngmail/gmailbtn.js';
import Modal from './components/modal/modal.js';



function App() {


  return (
    <div className="App">
      <BasicExample></BasicExample>
      <Portada></Portada>

      <header className="App-header" >
        
        <Fotoperfil></Fotoperfil>
        
        
        <p className='nombredevelop'>
          Edison Jair Chavarria Villa
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fullstack developer software
        </a>
        
        <h6 className='ciudadlocation'>
          Medellin-Colombia
        </h6>
        <Modal></Modal>
        
        
       
        
        <SocialButtons></SocialButtons>
        <Buttonslin></Buttonslin>
        <Buttongml></Buttongml>
        <div className="mirepo">
          <h4 >Javascript  -  Node - React - Angluar - TypeScript - Java - Python - C# - Php - CSS - HTML5 - SQL > __ 

          </h4>
          <h3 className='titulorepo'>
          Repositorios
          </h3>
          <div><UncontrolledExample></UncontrolledExample>
          </div><br/>
          <h3 className='titulorepo'>
          Consumo de API
          </h3>
          <div className={"consumirapis"}>
            <h1>PokemonAPI</h1>
            <PokemonList></PokemonList>
            
            
          </div>
          <h3 className='titulorepo'>
          Juegos
          </h3>
          <div className={"juegosjs"}>

            <h3>GAME15</h3>

            <p>Ordena los numeros del 1 al 15 en menos de 120 movimientos,  puedes hacerlo?</p>
            <Game15></Game15>
            
            
            
          </div>

        </div>
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
