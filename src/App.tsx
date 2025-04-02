import { useSelector, useDispatch, Provider } from 'react-redux'
import { useGetProdutosQuery } from './services/api'
import { adicionarAoCarrinho } from './store/reducer/carrinho'
import { alternarFavorito } from './store/reducer/favoritos'
import { RootState } from './store'
import Header from './components/Header'
import Produtos from './containers/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  return (
    <div className="container">
      <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
      <Produtos
        produtos={produtos}
        favoritos={favoritos}
        favoritar={(p) => dispatch(alternarFavorito(p))}
        adicionarAoCarrinho={(p) => dispatch(adicionarAoCarrinho(p))}
      />
    </div>
  )
}

export default App
