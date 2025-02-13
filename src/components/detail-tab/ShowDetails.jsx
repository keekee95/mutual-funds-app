/***
 * This function takes details for MF and displays it in /details page
 * @param {Object} details json object from API: meta data 
 */
export default function ShowDetails(props){
    return(
        <section className="details-section">
            <details className="details-container" open>
                <summary className="details-header">{props.details.scheme_name}</summary>
                <div className="details-tab">
                    <div className="details-row">
                        <div className="details-cell">
                            <span className="details-label">Scheme Code: </span>
                            <span className="details-value">{props.details.scheme_code}</span></div>
                        <div className="details-cell"> 
                            <span className="details-label">Fund House: </span>
                            <span className="details-value">{props.details.fund_house}</span>
                        </div>
                    </div>
                    <div className="details-row">
                        <div className="details-cell">
                            <span className="details-label">Scheme Category: </span>
                            <span className="details-value">{props.details.scheme_category}</span></div>
                        <div className="details-cell"> 
                            <span className="details-label">Scheme Type: </span>
                            <span className="details-value">{props.details.scheme_type}</span>
                        </div>
                    </div>
                    <div className="details-row">
                        <div className="details-cell">
                            <span className="details-label">ISIN Growth: </span>
                            <span className="details-value">{props.details.isin_growth}</span></div>
                        <div className="details-cell"> 
                            <span className="details-label">ISIN Div Reinvestment: </span>
                            <span className="details-value">{props.details.isin_div_reinvestment}</span>
                        </div>
                    </div>
                </div>
            </details>
        </section>
    )
}