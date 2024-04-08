import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  produtoNoCarrinho: Produto[]
}

const initialState: CarrinhoState = {
  produtoNoCarrinho: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (
        state.produtoNoCarrinho.find((produtos) => produtos.id === produto.id)
      ) {
        alert('Produto já adicionado no carrinho!')
      } else {
        state.produtoNoCarrinho.push(produto)
      }
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer
