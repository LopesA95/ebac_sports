import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const Header = () => {
  const favoritos = useSelector(
    (state: RootState) => state.favoritos.produtosFavoritos
  ) // Use useSelector para acessar favoritos
  const itens = useSelector(
    (state: RootState) => state.carrinho.produtoNoCarrinho
  )
  const valorTotal = itens.reduce((acc: number, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>{' '}
        {/* Acessando o comprimento dos favoritos */}
        <img src={cesta} alt="" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
