import styles from './Produto.module.css'
import { useState } from 'react'
import { Button } from '../Reutilizaveis/Button/Button'
import { Accordion } from '../Reutilizaveis/Accordion/Accordion'
import infoproduto from '../../assets/data/infoprodutos.json'

export function Produto() {

  const [img, setImg] = useState(0);

  return (
    <div className={styles['container-produto']}>
      <p className={styles['container-tag']}>ELETRÔNICOS > SMARTPHONES</p>
      <div className={styles['produto-imagem']}>
        <div className={styles['imagem-display']}>
          <img src={infoproduto.imagens[img]} alt={`Imagem ${img + 1}`} />
        </div>
        <div className={styles['imagem-carrosel']}>
          <ul className={styles['carrosel-list']}>
            {infoproduto.imagens.map((imagem, index) => {
              return (
                <li key={index}><img src={imagem} alt={`Imagem ${index + 1}`}
                  onClick={() => setImg(index)} /></li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={styles['produto-info']}>
        <div className={styles['produto-descricao']}>
          <h2>{infoproduto.nome}</h2>
          <p className={styles['produto-id']}>CÓD: {infoproduto.id}</p>
          <p className={styles['descricao-texto']}>{infoproduto.descricao}</p>
          <p className={styles['descricao-avaliacao']}>{`Avaliações: ${infoproduto.avaliacao} / 5`}</p>
          <div className={styles['descricao-preco']}>
            <p className={styles['preco-vista']}>{infoproduto.preco.vista}</p>
            <p className={styles['vista']}>a vista ou</p>
            <p className={styles['preco-parcelado']}>{infoproduto.preco.parcelado}</p>
          </div>
          <div className={styles['produto-info-specs']}>
            <h3>Especificações</h3>
            <ul>
              {infoproduto.especificacoes.map((spec, index) => {
                return (
                  <li key={index}>{spec}</li>
                )
              })}
            </ul>
          </div>
          <Button className={styles['produto-botao']} type='submit'>Comprar</Button>
        </div>
      </div>
      <div className={styles['produto-vendedor']}>
        <h3>Detalhes do vendedor</h3>
        <div className={styles['vendedor-info']}>
          <p>Nome: {infoproduto.vendedor.nome}</p>
          <p>Endereço: {infoproduto.vendedor.endereco}</p>
          <p>Telefone: {infoproduto.vendedor.telefone}</p>
          <p>E-mail: <a href='target_blank'>{infoproduto.vendedor.email}</a></p>
          <p>Avaliações: {infoproduto.vendedor.avaliacao} / 5</p>
        </div>
      </div>
      <div className={styles['produto-comentarios']}>
        <Accordion
          accordionStyle={styles[`comentarios-accordion`]}
          title={`Avaliações dos usuários`}
          contentStyle={styles['comentarios-accordion-content']}
          content={
            <div>
              {infoproduto.comentarios.map((comentario) => {
                return (
                  <div key={comentario.id} className={styles['comentarios-accordion-content-container']}>
                    <div>
                      <p>Usuario: {comentario.usuario}</p>
                    </div>
                    <div>
                      <h4>{comentario.titulo}</h4>
                      <p>{comentario.mensagem}</p>
                    </div>
                    <div className={styles['comentario-nota-data']}>
                      <p>Avaliação: {comentario.nota} / 5</p>
                      <p>Publicado: {comentario.data_publicacao}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          }
        />
      </div>
      <div className={styles['produto-perguntas']}>
        <Accordion
          accordionStyle={styles[`perguntas-accordion`]}
          title={`Avaliações dos usuários`}
          contentStyle={styles['perguntas-accordion-content']}
          content={
            <div>
              {infoproduto.perguntas.map((pergunta) => {
                return (
                  <div key={pergunta.id} className={styles['perguntas-accordion-content-container']}>
                    <div>
                      <p>Usuario: {pergunta.usuario}</p>
                    </div>
                    <div>
                      <h4>Pergunta: {pergunta.duvida}</h4>
                      <p>Resposta: {pergunta.resposta}</p>
                    </div>
                    <div className={styles['perguntas-data']}>
                      <p>Publicado: {pergunta.data_publicacao}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          }
        />
      </div>
      <div className={styles['produtos-relacionados-container']}>
        <div className={styles['relacionados-h3']}>
        <h3>Produtos relacionados</h3>
        </div>
        <div className={styles['relacionados-container']}>
          {infoproduto.outros_produtos.map((produto) => {
            return (
              <div key={produto.id} className={styles['relacionados']}>
                <div className={styles['relacionados-img']}>
                  <img src={produto.imagem} alt={produto.nome} />
                </div>
                <div className={styles['relacionados-nome']}>
                  <h4>{produto.nome}</h4>
                </div>
                <div className={styles['relacionados-preco']}>
                  <p>{produto.preco}</p>
                </div>
                <div className={styles['relacionados-button-container']}>
                  <Button className={styles['relacionados-button']}>Comprar</Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}