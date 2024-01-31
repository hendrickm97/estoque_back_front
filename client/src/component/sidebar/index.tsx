import React from 'react'
import {
    Drawer,
    List,
    ListItem,
    Toolbar,
    Typography,
} from '@mui/material'
import { ListItemNavLink } from '../ListItemNavLink';



const Sidebar = () => {


    return (
        <Drawer
            variant='permanent'
            anchor="left"
            sx={{
                ['& .MuiDrawer-paper']:
                    { width: '180px', background: '#3b3131', textAlign: 'center' },

            }} >
            <Toolbar sx={{ marginBottom: '20px' }} />
            <List>
                <ListItem>
                    <Typography
                        variant='body1'
                        sx={{ flexGrow: 1, fontWeight: 900, }} color={'white'}>Olá usuário!
                    </Typography>
                </ListItem>
                <ListItemNavLink to='/'>Home</ListItemNavLink>
                <ListItemNavLink to='/updateProduct'>Produto</ListItemNavLink>
            </List>
        </Drawer>


    )
}

export default Sidebar;
