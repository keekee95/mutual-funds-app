import '../../styles/search.css'
/**
 * Takes in search function and triggers it on change to input 
 * @param {function} searchFunction  
 * @returns 
 */
export default function SearchBox(props){

    function search(event){
        event.preventDefault()
        const value=event.currentTarget.value
        props.searchFunction(value)
        console.log(`Search products by text:${value}`)
    }

    return(
        <div className="search-box">
            <span className="material-symbols-outlined" >search</span>
            <input onChange={search}
                type="search" 
                name="searchTerm" 
                placeholder="Search Mutual Fund Name"
                aria-label="Search For Mutual Funds"
            />
        </div>
    )
}