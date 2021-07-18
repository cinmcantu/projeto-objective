import React, { useEffect, useState } from 'react';
import { } from '../css/App.css'
import * as BiIcons from 'react-icons/bi';
import CharactersTable from './CharactersTable';
import Pagination from './Pagination';
import { fetchData } from '../api'


export default function Body(props) {
    const { pageNum } = props
    const [personagens, setPersonagens] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [search, setSearch] = useState("")

    async function callApi(search) {
        const offset = pageNum ? (pageNum - 1) : 0
        console.log(offset)
        const result = await fetchData(search, offset, "")
        console.log(result.data.results)
        setPersonagens(result.data.results)
        setTotalPages(Math.ceil(result.data.total / 10))
        setIsLoaded(true)
    }

    useEffect(() => {
        callApi("")
    }, [pageNum])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoaded(false)
        callApi(search)
    }

    return (
        <>
            <main>
                <h1 className="title">Busca de personagens</h1>
                <p className="sub-title">Nome do personagem</p>
                <form className="pesquisa">
                    <input type="text" placeholder="Search" onChange={handleSearch} />
                    <button onClick={handleSubmit}><BiIcons.BiSearchAlt2 /></button>
                </form>
                {
                    isLoaded ? (personagens ? <CharactersTable personagens={personagens} />
                        : <h3 className="loading">Personagem não encontrado</h3>
                    )
                        : <h3 className="loading">Buscando dados na S.H.I.E.L.D.</h3>
                }
            </main>
            {isLoaded && <Pagination pages={totalPages} />}


        </>
    )
}