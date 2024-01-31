import NavBar from './component/appBar'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from './component/sidebar'

function App() {
    return (
        <Box padding={'80px 0px 80px 180px'}>
            <NavBar />
            <Sidebar />
            <Outlet />
        </Box>
    )
}

export default App
