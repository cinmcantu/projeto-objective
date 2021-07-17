import React from 'react';
import { } from '../css/App.css'
import * as BiIcons from 'react-icons/bi';
import Characters from './Characters';


export default function CharactersTable(){
    return(
        <>
            <div className="cabecalho">
                <p>Personagem</p>
                <p>Séries</p>
                <p>Eventos</p>
            </div>
                <Characters />

        </>
    )
}