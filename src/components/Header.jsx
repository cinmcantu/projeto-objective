import React from 'react';
import logo from '../logo.png'
import { } from '../css/App.css'

export default function Header() {
    return (

        <header>
            <div className="logo">
                <img src={logo} alt="" width="100" />
            </div>
            <div className="candidato-info">
                <div>
                    <p><strong>Cinthia Miranda Cantu</strong></p>
                    <p>Teste de Front-end</p>
                </div>
                <p className="box">CB</p>
            </div>
        </header>

    )
}