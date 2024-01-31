import { Button, styled } from '@mui/material';



export const StyledButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 12,
    fontWeight: 900,
    padding: '6px 12px',
    color: '#ffffff',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#3b3131',
    borderColor: '#3b3131',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#161111',
        borderColor: '#161111',
        boxShadow: '#161111 0px 2px 4px 0px, #0a2127 0px 2px 10px 0px',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#161111',
        borderColor: '#161111',
    },
    '&:focus': {
        boxShadow: '#161111 0px 2px 4px 0px, #0a2127 0px 2px 10px 0px',
    },
});