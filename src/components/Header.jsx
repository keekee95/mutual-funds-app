import { Link } from "react-router-dom";
/**
 * @returns Common header component for the Mutual Funds application
 */
export default function Header(){
    return (
        <header className="header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <span className="material-symbols-outlined">monitoring</span>
                <span>mutual funds</span>
            </Link>
        </header>
    )
}