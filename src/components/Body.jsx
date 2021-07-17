import React from 'react';
import { } from '../css/App.css'
import * as BiIcons from 'react-icons/bi';
import CharactersTable from './CharactersTable';


export default function Body(){
    return(
        <main>
            <h1 className="title">Busca de personagens</h1>
            <p className="sub-title">Nome do personagem</p>
            <form class="pesquisa">
                <input type="text" placeholder="Search" />
                <button><BiIcons.BiSearchAlt2 /></button>
            </form>
            <CharactersTable />
        </main>
    )
}