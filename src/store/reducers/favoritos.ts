import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface FavoritosState {
  produtosFavoritos: Produto[] // Array de produtos favoritos
}

const initialState: FavoritosState = {
  produtosFavoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito(state, action: PayloadAction<Produto>) {
      const index = state.produtosFavoritos.findIndex(
        (produto) => produto.id === action.payload.id
      )
      if (index !== -1) {
        state.produtosFavoritos.splice(index, 1) // Remove o produto dos favoritos
      } else {
        state.produtosFavoritos.push(action.payload) // Adiciona o produto aos favoritos
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
