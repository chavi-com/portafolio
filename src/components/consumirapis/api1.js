import './api1.css';
import React,{useState,useEffect} from 'react';


const Apiuno = (url)=>{
    const [pokemons,setPokemons]=useState({cargando:true,data:null});
    
    useEffect( ()=>{
        async function obtenerPokemons(){
            const response= await fetch('https://pokeapi.co/api/v2/pokemon?limit=4&offset=0');
            const daata = await response.json();
            
            setPokemons(daata.result);
            console.log(pokemons);
        }  
        obtenerPokemons();      
        
    } ,[])
    
    

    return(
        <div>
            <h1>pokemon</h1>
        </div>
    )

}
export default Apiuno;