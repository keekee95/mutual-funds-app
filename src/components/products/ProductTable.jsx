import {useState} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from "@mui/material/TablePagination";
import { Link } from "react-router-dom";
import '../../styles/table.css'

/**
 * Displays list of multual funds in a paginated table format 
 * @param {List} productList which contains product list to be displayes
 * @returns 
 */
export default function ProductTable(props){

    const [page,setPage]= useState(0)
    const [rowsPerPage,setRowsPerPage]= useState(10)

    const headerStyle={
        fontWeight:"700"
    }

    function handlePageChange(event,page){
        setPage(page)   
    }

    function handleRowsPerPageChange(event){
        setRowsPerPage(parseInt(event.target.value,10))
        setPage(0)
    }

    const displayedProducts = 
        props.productList&&props.productList.length!==0?
            props.productList
                .slice(page*rowsPerPage,
                    page*rowsPerPage+rowsPerPage>props.productList.length?
                        props.productList.length: page*rowsPerPage+rowsPerPage) 
            : []

    return(
        <TableContainer component="main">
            <Table sx={{ minWidth: 650 }} aria-label="product table">
                <TableHead sx={{backgroundColor:"#f4f4f7"}}>
                    <TableRow>
                        <TableCell align="left" sx={headerStyle}>Scheme Code</TableCell>
                        <TableCell align="center" sx={headerStyle}>Scheme Name</TableCell>
                        <TableCell align="center"sx={headerStyle}>ISIN Growth</TableCell>
                        <TableCell align="center"sx={headerStyle}>ISIN Div. ReInv.</TableCell>
                        <TableCell align="center"sx={headerStyle}>Details</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                {
                    displayedProducts.map((row) => (
                        <TableRow
                            key={row.schemeCode}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            <TableCell component="th" scope="row">
                                {row.schemeCode}
                            </TableCell>
                            <TableCell align="left">{row.schemeName}</TableCell>
                            <TableCell align="right">{row.isinGrowth}</TableCell>
                            <TableCell align="right">{row.isinDivReinvestment}</TableCell>
                            <TableCell align="right">
                                <Link to={`/details/${row.schemeCode}`}>
                                    <button className="table-row-details-button">
                                        <span className="material-symbols-outlined">query_stats</span>
                                    </button>
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
                </TableBody>
            </Table>
            <TablePagination
                count={props.productList?props.productList.length:0}
                page={page}
                onPageChange={handlePageChange}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleRowsPerPageChange}
                rowsPerPageOptions={[5, 10, 25,50]}
            />
        </TableContainer>
    )
}