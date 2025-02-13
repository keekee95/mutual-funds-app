import '../styles/details.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowDetails from "./detail-tab/ShowDetails"; 
import NavLineChart from "./detail-tab/NavLineChart";
import { Link } from "react-router-dom";

/**
 * This component contains a section to display product meta data 
 * and a line chart to represent product Nav changes over time
 * @returns Returns /details/:schemeCode page
 */
export default function Details(){
    const { schemeCode } = useParams()
    const [details,setDetails] = useState()

    async function getProductDetails(params) {
        await fetch(`https://api.mfapi.in/mf/${schemeCode}`)
        .then(res=>res.json())
        .then(json => setDetails(json))
    }

    useEffect(()=>{
        getProductDetails(schemeCode)
    },[])

    return(
        <main className="main-container">
            <div className='redirect-home'>
                <span className="material-symbols-outlined">arrow_back</span>
                <Link to="/">
                    <span>Back to home</span>
                </Link>
            </div>
            {details ? <ShowDetails details={details.meta}/>:null}
            {details ? <NavLineChart data={details.data}/>:null}
        </main>
    )
}