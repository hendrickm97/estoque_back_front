import { useState } from 'react'
import { Stack } from '@mui/material'
import DataTable from '../../component/table'
import { StyledTextField } from '../../component/textField'
import { StyledButton } from '../../component/button'
import axios from 'axios'

export type Data = {
    id: number
    nome: string
    categoria: string
    quantidade: string
    valor: string
}

function Home() {
    const dataHeader = ['Nome', 'Categoria', 'Quantidade', 'Valor']
    const [dataBody, setDataBody] = useState<Data[]>([])
    const [busca, setBuscar] = useState('')

    axios
        .get('https://estoque-server.vercel.app')
        .then((res) => res.data)
        .then((res) => setDataBody(res.data))

    return (
        <Stack sx={{ padding: '20px' }} spacing={2} direction={'column'}>
            <Stack direction={'row'} spacing={2}>
                <StyledTextField
                    label="Buscar Produtos"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    value={busca}
                    onChange={(e) => setBuscar(e.target.value)}
                />
                <StyledButton>Pesquisar</StyledButton>
            </Stack>
            <DataTable dataHeader={dataHeader} dataBody={dataBody} />
        </Stack>
    )
}

export default Home
