import { ListItem, Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

type Props = {
    children: string,
    to: string
}


const StyledNavLink = styled(NavLink)({
    color: '#ffff !important',
    textDecoration: 'none',
    textAlign: 'center',
    width: '100%',
    padding: '10px',

    '&.active': {
        background: '#DBA365',
    }
});

export const ListItemNavLink = ({ children, to }: Props) => {
    return (
        <ListItem sx={{ padding: '0px' }}>
            <StyledNavLink to={to} >
                <Typography fontWeight={900} variant='button' fontSize={'10px'}>
                    {children}
                </Typography>
            </StyledNavLink>
        </ListItem>
    )
}