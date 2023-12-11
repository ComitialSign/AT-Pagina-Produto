import { Header } from '../Header/Header'
import { Hamburguer } from '../Hamburguer/Hamburguer'
import { useState } from 'react'

export function HeaderNavigation() {
  
  const [openHamburguer, setHamburguerOpen] = useState(false);

  const toggleHamburguer = () => {
    setHamburguerOpen(!openHamburguer)
  }

  return (
    <>
      <Header onClick={toggleHamburguer} />
      <Hamburguer className={openHamburguer ? 'openBurguer' : 'closeBurguer'} />
    </>
  )
  
}