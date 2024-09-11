import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.css";
import { Cardcharacter } from "./Cardcharacter";
import { Cardplanet } from "./cardplanet";
import { Context } from "../store/appContext";
import { Cardship } from "./Cardship";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return(
        <>
        <h1 className="text-danger">Characters</h1>

        <div className="row d-flex flex-nowrap my-5" style={{overflowX:"scroll"}}>
        {store.devCharacters.map((character, index)=>  <Cardcharacter key={index}
        
         name={character.name} 
         hairColor={character.hair_color} 
         eyeColor={character.eye_color} 
         gender={character.gender}
         index={character.url[character.url.length - 2]}

         />)}
        </div>
         <h1 className="text-danger">Planets</h1>
        <div className="row d-flex flex-nowrap my-5" style={{overflowX:"scroll"}}>
        {store.devPlanets.map((planets, index)=>  <Cardplanet key={index}
        
         name={planets.name} 
         population={planets.population} 
         terrain={planets.terrain} 

         index={planets.url[planets.url.length - 2]}

         />)}
        </div>
        <h1 className="text-danger">Ships</h1>
        <div className="row d-flex flex-nowrap my-5" style={{overflowX:"scroll"}}>
        {store.devShips.map((Ships, index)=>  <Cardship key={index}
        
         name={Ships.name} 
         model={Ships.model} 
         cost_in_credits={Ships.cost_in_credits} 
         passengers={Ships.passengers} 

         index={Ships.url[Ships.url.length - 2]}

         />)}
        </div>

        </>

    )
};









/* 
pseudocodigo
crear componente de cartas
traer componentes de api para rellenar cartas
agregar visualizacion de cartas individuales
agregar boton para cambiar de visualizacion
agregar boton de favoritos a las cartas
agregar lista de favoritos
agregar enlace a visualizacion de cartas individuales en distintos botones
agregar boton de eliminar de favoritos
actualizar estilo de boton de favoritos acorde a el estado actual
agregar boton para volver al home con el logo de starwars
*/