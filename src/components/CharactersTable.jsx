import React, { useState } from 'react';
import { } from '../css/App.css'
import Characters from './Characters';
import {resp} from '../objeto'


export default function CharactersTable(){
    const personagens = resp.data.results

    return(
        <>
            <div className="cabecalho">
                <p className="foto">Personagem</p>
                <p className="serie">Séries</p>
                <p className="evento">Eventos</p>
            </div>
            {
                Array(10).fill(0).map((elem, i)=>{
                    return <Characters key={personagens[i].id}  personagem={personagens[i]} />
                })
            }
           
        </>
    )
}