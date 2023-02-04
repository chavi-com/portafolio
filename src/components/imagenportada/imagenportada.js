import './imagenportada.css';
import '../../assets/imagen/binary.jpg';
import binary from'./binary.jpg';


function Portada (){
    return(
        <div className="portada">
            <img  src={binary} href="" className='imgportada'></img>

        </div>
    )
}
export default Portada;