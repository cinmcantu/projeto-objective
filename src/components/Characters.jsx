import React from 'react';
import photo from '../photo.png'
import { } from '../css/App.css'


export default function Characters(props) {
    const { personagem } = props

    return (
        <>
            <div className="personagem">
                <section className="foto">
                    <img src={personagem.thumbnail.path} alt="" />
                    <p>{personagem.name}</p>
                </section>
                <section className="serie">
                    {
                        Array(3).fill(0).map((el, i) => {
                            return <p>{personagem.series.available > i
                                ? personagem.series.items[i].name
                                : ""
                            }</p>
                        })
                    }
                </section>
                <section className="evento">
                    {
                        Array(3).fill(0).map((el, i) => {
                            return <p>{personagem.events.available > i
                                ? personagem.events.items[i].name
                                : ""
                            }</p>
                        })
                    }
                </section>
            </div>

        </>
    )
}