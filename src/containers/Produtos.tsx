import ProdutoComponent from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { RootState } from '../store/index'
import { useSelector } from 'react-redux'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos, isLoading } = useGetProdutosQuery()
  const favoritos = useSelector(
    (state: RootState) => state.favoritos.produtosFavoritos
  )

  if (isLoading) {
    return <p>Carregando...</p>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favoritos.some(
            (favorito) => favorito.id === produto.id
          )}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
