import React, { useState } from 'react';
import { } from '../css/App.css'
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import PageBox from './PageBox';


export default function Pagination(props){
    const { pages }  = props
    const totalBoxes = pages<=5 ? pages : 5
    const [firstBox, setFisrtBox] = useState(1)

    const sumPage = () =>{
        if((firstBox + totalBoxes -1 ) < pages)
        setFisrtBox(firstBox + 1)
    }
    const removePage = () =>{
        if(firstBox !== 1)
        setFisrtBox(firstBox - 1)
    }
    const beggining = () =>{
        setFisrtBox(1)
    }
    const last = () =>{
        setFisrtBox(pages - totalBoxes + 1 )
    }

    return(
        <section className="pagination">
            <CgIcons.CgChevronDoubleLeft onClick={beggining} className={firstBox===1 ? "invisible" : ""} />
            <MdIcons.MdKeyboardArrowLeft onClick={removePage} />
            {
                Array(totalBoxes).fill(0).map((elem, i)=>{
                    return <PageBox key={i} pageNum={i+firstBox} />
                })
            }
            <MdIcons.MdKeyboardArrowRight onClick={sumPage} />
            <CgIcons.CgChevronDoubleRight onClick={last} className={firstBox===(pages - totalBoxes + 1 ) ? "invisible" : ""} />
        </section>
    )
}