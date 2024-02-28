import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material'
import { StyledTableCell } from '../../component/tableCell'
import { Data } from '../../page/home'

interface DataProps {
    dataHeader: string[]
    dataBody: Data[]
}

const DataTable = ({ dataHeader, dataBody }: DataProps) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ background: '#3b3131' }}>
                    <TableRow>
                        {dataHeader.map((item, index) => {
                            return (
                                <StyledTableCell key={index}>
                                    {item}
                                </StyledTableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataBody.map((item) => (
                        <TableRow key={item.id}>
                            <StyledTableCell>{item.nome}</StyledTableCell>
                            <StyledTableCell>{item.categoria}</StyledTableCell>
                            <StyledTableCell>{item.quantidade}</StyledTableCell>
                            <StyledTableCell>R$ {item.valor}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DataTable
