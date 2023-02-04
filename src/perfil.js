import logo from './logo.svg';
import './perfil.css';
import Portada from './components/imagenportada/imagenportada.js';
import './assets/imagen/binary.jpg';
import Fotoperfil from './components/fotoperfil/fotoperfil';
import Aptitudes from './components/aptitudes/aptitudes.js';
import BasicExample from './components/narvar/navbar';
import UncontrolledExample from './components/repositorios/sliderRepos';
import Footer from './components/footer/footer';

function Perfil() {


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
          Residencia: Medellin-Colombia
        </h6>
        <h6 className='ciudadlocation'>Edad: 27años</h6>
        <h6 className='ciudadlocation'>Genero: masculino</h6>
        <h6 className='ciudadlocation'>Telefono: +57 3052102814</h6>
        <h6 className='ciudadlocation'>correo: edisonchavi@gmail.com</h6>
        <h5 className='nombredevelop'>Educacion:  universidad Cesde</h5>
        
        <h6 className='ciudadlocation'>Titulo:Desarrollador  de softare</h6>
        
        <h5 className='ciudadlocation'>experiencia: + 1 año</h5>
        <h5 className='ciudadlocation'>Comfama</h5>

        <div className="info">

          
          <h3 className='experiencia'>
          experiencia y aptitudes 
          </h3>
          <Aptitudes></Aptitudes>
          
          
          
         

        </div>
      </header>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Perfil;
