import React from 'react';
import { } from '../css/App.css'
import { useParams } from "react-router-dom";
import Body from './Body';


export default function Page() {
    const { pageNum } = useParams()
    return (
        <Body pageNum={pageNum} />
    )
}