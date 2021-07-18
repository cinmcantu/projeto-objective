import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../api'
import { Link } from "react-router-dom";

export default function Details() {
    const { charId } = useParams()
    const [personagem, setPersonagem] = useState()
    const [isLoaded, setIsLoaded] = useState(false)

    const imageSize = "portrait_uncanny"
    const imgUrl = () => {
        return `${personagem.thumbnail.path}/${imageSize}.${personagem.thumbnail.extension}`
    }

    const callApi = async () => {
        const result = await fetchData("", "", charId)
        console.log(result.data.results[0])
        setPersonagem(result.data.results[0])
        setIsLoaded(true)
    }

    useEffect(() => {
        callApi()
    }, [])

    return (
        <>
            {
                isLoaded ? (
                    <div className="details">
                        <h1>{personagem.name}</h1>
                        <section>
                            <section>
                                <img src={imgUrl()} alt="" />
                                <p className="description">{personagem.description}</p>
                            </section>
                            <section className="comics">
                                <p>Aparições nos Quadrinhos</p>
                                <ul>
                                    {
                                        personagem.comics.items.map((elem, i) => {
                                            return (
                                                <li>
                                                    {elem.name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </section>
                        </section>
                        <div className="btn">
                            <button className="btn-voltar"><Link to="/">Voltar ao inicio</Link></button>
                        </div>

                    </div>

                ) : <h3>Carregando...</h3>
            }
        </>
    )
}