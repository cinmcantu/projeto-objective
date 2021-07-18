import React from 'react';
import { } from '../css/App.css'
import { Link } from "react-router-dom";

export default function Characters(props) {
    const { personagem } = props
    const qntLinhas = 3
    const imageSize = "standard_small"
    const imgUrl = () => {
        return `${personagem.thumbnail.path}/${imageSize}.${personagem.thumbnail.extension}`
    }

    return (
        <>
            <Link className="char-link" to={`/details/${personagem.id}`}>
                <div className="personagem">
                    <section className="foto">
                        <img src={imgUrl()} alt="" />
                        <p>{personagem.name}</p>
                    </section>
                    <section className="serie">
                        {
                            Array(qntLinhas).fill(0).map((el, i) => {
                                return <p key={i}>{personagem.series.available > i
                                    ? personagem.series.items[i].name
                                    : ""
                                }</p>
                            })
                        }
                    </section>
                    <section className="evento">
                        {
                            Array(qntLinhas).fill(0).map((el, i) => {
                                return <p key={i}>{personagem.events.available > i
                                    ? personagem.events.items[i].name
                                    : ""
                                }</p>
                            })
                        }
                    </section>
                </div>
            </Link>
        </>
    )
}