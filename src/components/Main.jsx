import { useState,useEffect } from "react";
import SearchBox from "./products/SearchBox";
import ProductTable from "./products/ProductTable";
/**
 * The component has a search bar which searches through API and populates a table
 * @returns Home page with search function and table
 */
export default function Main(){
    const [productList,setProductList]=useState([])
    const [filteredSchemeCodes,setFilteredSchemeCodes]=useState([])

    useEffect(
    ()=>{
        requestMfs()
    }
    ,[])

    async function requestMfs() {
        const products = await fetch(
            "https://api.mfapi.in/mf"
        ).then(res=>res.json())
        const schemeCodes = await products.map(product=>product.schemeCode)
        setProductList(products)
        setFilteredSchemeCodes(schemeCodes)
    }

    async function searchMfs(param) {
        if(!param||param===""){
            setFilteredSchemeCodes([])
        }
        else 
        {
            await fetch(
                `https://api.mfapi.in/mf/search?q=${param}`
            )
            .then(res=>res.json())
            .then(filteredProducts=>filteredProducts.map(product=>product.schemeCode))
            .then(filteredSchemeCodes=>setFilteredSchemeCodes(filteredSchemeCodes))
            .then(console.log(`Filtered schemeCodes length ${filteredSchemeCodes.length}`))
        }
    }

    const filteredProducts= productList.filter(product=>filteredSchemeCodes.includes(product.schemeCode))
    
    console.log(`Filtered products length ${filteredProducts.length}`)
    console.log(`Number of Products: ${productList.length}`)

    return(
        <main className="main-container">
            <SearchBox searchFunction={searchMfs}/> 
            <ProductTable productList={filteredProducts}/>        
        </main>
    )   
}