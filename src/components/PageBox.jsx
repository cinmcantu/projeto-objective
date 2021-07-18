import React from 'react';
import { } from '../css/App.css'
import { Link } from "react-router-dom";


export default function PageBox(props) {
    const { pageNum } = props
    return (
        <Link to={`/page/${pageNum}`}>
            <div className="page-box">
                <p>{pageNum}</p>
            </div>
        </Link>
    )
}