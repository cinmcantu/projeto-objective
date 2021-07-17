import React from 'react';
import { } from '../css/App.css'
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';
import PageBox from './PageBox';


export default function Pagination(){
    const pages = 5

    return(
        <section className="pagination">
            <MdIcons.MdKeyboardArrowLeft />
            {
                Array(pages).fill(0).map((elem, i)=>{
                    console.log(i)
                    return <PageBox pageNum={i+1} />
                })
            }
            <MdIcons.MdKeyboardArrowRight />
            <CgIcons.CgChevronDoubleRight />
        </section>
    )
}