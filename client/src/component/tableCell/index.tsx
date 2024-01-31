import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import {
    TableCell,
} from '@mui/material'


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#3b3131',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));