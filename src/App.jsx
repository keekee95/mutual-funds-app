import Header from "./components/Header"
import Main from "./components/Main"
import Details from "./components/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/details/:schemeCode" element={<Details />} />
                <Route path="/" element={<Main/>} />  
            </Routes>  
        </BrowserRouter>
    )
}