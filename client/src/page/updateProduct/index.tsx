import { Stack } from '@mui/material'
import { StyledTextField } from '../../component/textField'
import { StyledButton } from '../../component/button'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
    const [nome, setNome] = useState('')
    const [categoria, setCategoria] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        await axios
            .post('https://estoque-server.vercel.app/', {
                nome: nome,
                categoria: categoria,
                quantidade: quantidade,
                valor: valor,
            })
            .then((data) => {
                console.log(data)
                setNome('')
                setCategoria('')
                setQuantidade('')
                setValor('')
                navigate('/')
            })
    }

    return (
        <Stack
            sx={{ padding: '20px' }}
            spacing={2}
            direction={'column'}
            onSubmit={handleSubmit}
        >
            <Stack direction={'row'} spacing={2}>
                <StyledTextField
                    label={'Nome do produto'}
                    fullWidth
                    onChange={(e) => setNome(e.target.value)}
                    name="nome"
                    value={nome}
                />
                <StyledTextField
                    label={'Categoria'}
                    fullWidth
                    onChange={(e) => setCategoria(e.target.value)}
                    name="categoria"
                    value={categoria}
                />
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <StyledTextField
                    label={'Quantidade em estoque'}
                    fullWidth
                    onChange={(e) => setQuantidade(e.target.value)}
                    name="quantidade"
                    value={quantidade}
                />
                <StyledTextField
                    label={'Valor do estoque'}
                    fullWidth
                    onChange={(e) => setValor(e.target.value)}
                    name="valor"
                    value={valor}
                />
            </Stack>
            <Stack direction={'row'}>
                <StyledButton onClick={handleSubmit} sx={{ padding: '10px' }}>
                    Adicionar produto
                </StyledButton>
            </Stack>
        </Stack>
    )
}
export default UpdateProduct
