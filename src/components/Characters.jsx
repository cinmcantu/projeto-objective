import React from 'react';
import photo from '../photo.png'
import { } from '../css/App.css'
import * as BiIcons from 'react-icons/bi';


export default function Characters(){
    return(
        <>
            <div className="personagem">
                <section className="foto">
                    <img src={photo} alt="" />
                    <p>Name</p>
                </section>
                <section className="serie">
                    <p>Serie 1</p>
                    <p>Serie 2</p>
                    <p>Serie 3</p>
                </section>
                <section className="evento">
                    <p>Evento 1</p>
                    <p>Evento 1</p>
                    <p>Evento 1</p>
                </section>
            </div>

        </>
    )
}