import React from 'react';
import { } from '../css/App.css'
import Characters from './Characters';

export default function CharactersTable(props) {
    const { personagens } = props

    return (
        <>
            <div className="cabecalho">
                <p className="foto">Personagem</p>
                <p className="serie">Séries</p>
                <p className="evento">Eventos</p>
            </div>
            {
                Array(personagens.length).fill(0).map((elem, i) => {
                    return <Characters key={i} personagem={personagens[i]} />
                })
            }

        </>
    )
}