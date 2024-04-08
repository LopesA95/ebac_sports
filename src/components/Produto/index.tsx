// ProdutoComponent.tsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorito } from '../../store/reducers/favoritos'
import { adicionarAoCarrinho } from '../../store/reducers/carrinho'
import { Produto } from '../../App'
import * as S from './styles'
import { RootState } from '../../store'

type Props = {
  produto: Produto
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent: React.FC<Props> = ({ produto }) => {
  const dispatch = useDispatch()
  const favoritos = useSelector(
    (state: RootState) => state.favoritos.produtosFavoritos
  )

  const estaNosFavoritos = favoritos.some((p) => p.id === produto.id)

  const aoComprar = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleToggleFavorito = () => {
    dispatch(toggleFavorito(produto)) // Dispara a ação para favoritar o produto
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleToggleFavorito} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
