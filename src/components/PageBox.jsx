import React from 'react';
import { } from '../css/App.css'


export default function PageBox(props){
    const { pageNum } = props
    return(
        <div className="page-box">
            <p>{pageNum}</p>
        </div>
    )
}