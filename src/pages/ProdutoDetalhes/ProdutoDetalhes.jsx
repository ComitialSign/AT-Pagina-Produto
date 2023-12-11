import { HeaderNavigation } from '../../components/HeaderNavigation/HeaderNavigation'
import { Produto } from '../../components/Produto/Produto'
import { Foot } from "../../components/Foot/Foot"


export function ProdutoDetalhes() {

  return (
    <>
      <HeaderNavigation />
      <main>
        <Produto />
      </main>
      <Foot />
    </>
  )
}