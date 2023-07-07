import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Medal from '../../assets/rank.svg'
import Typography from '@mui/material/Typography';
import Player from '../../domain/entities/player';

interface ScoreboardProps {
    players: Player[];
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#161b1f',
        border: 0,
        color: '#a7abb4',
        fontWeight: 'bold'
    },
    [`&.${tableCellClasses.body}`]: {
        border: 0,
        fontSize: 14,
        color: '#d8dce5',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    border: 0,
    '&:nth-of-type(even)': {
        backgroundColor: '#161b1f',
    },
    '&:nth-of-type(odd)':{
        backgroundColor: '#1a2129'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function Ranking(props: ScoreboardProps) {
    return (
        <Box sx={{width:1}}>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                <Box>
                    <img alt='Medal' style={{ width: '30px' }} src={Medal} />
                </Box>
                <Typography sx={{ color: 'white' }}>Ranking</Typography>

            </Box>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">No.</StyledTableCell>
                            <StyledTableCell align="center">Name</StyledTableCell>
                            <StyledTableCell align="center">Score</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {props.players.length ? <TableBody>
                        {props.players.sort((a, b) => a.scores - b.scores).reverse().map((row, index) => (
                            <StyledTableRow key={index}>
                                <StyledTableCell align="center" component="th" scope="row">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align='center' >{row.name}</StyledTableCell>
                                <StyledTableCell align="center">{row.scores}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody> : new Array(5).fill(undefined).map((item, index) => <TableBody><StyledTableRow key={index}>
                        <StyledTableCell align="center" component="th" scope="row">
                            {index + 1}
                        </StyledTableCell>
                        <StyledTableCell align='center' >-</StyledTableCell>
                        <StyledTableCell align="center">-</StyledTableCell>
                    </StyledTableRow></TableBody>)}
                </Table>
            </TableContainer>
        </Box>
    );
}
