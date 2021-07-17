import React from 'react';
import { } from '../css/App.css'
import * as BiIcons from 'react-icons/bi';
import CharactersTable from './CharactersTable';
import Pagination from './Pagination';
import {resp} from '../objeto'


export default function Body() {

    const totalItens = resp.data.total
    const totalPages = Math.ceil(totalItens/10)
    return (
        <>
            <main>
                <h1 className="title">Busca de personagens</h1>
                <p className="sub-title">Nome do personagem</p>
                <form className="pesquisa">
                    <input type="text" placeholder="Search" />
                    <button><BiIcons.BiSearchAlt2 /></button>
                </form>
                <CharactersTable />
            </main>
            <Pagination pages={ totalPages } />
        </>
    )
}