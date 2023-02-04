import './fotoperfil.css';
import '../../assets/imagen/binary.jpg';
import fotoperfiles from'./fotoperfiles.jpg';


function Perfil (){
    return(
        <div className="perfil">
            <img  src={fotoperfiles} href="" className='imgperfil'></img>

        </div>
    )
}
export default Perfil;