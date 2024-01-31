import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

const NavBar = () => {
    return (
        <AppBar
            position="fixed"
            sx={{
                background: '#3b3131',
                display: 'flex',
                justifyContent: 'center',
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}>
            <Toolbar >
                <Typography
                    variant="h4"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: 900 }}
                    noWrap >Seu Estoque</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar