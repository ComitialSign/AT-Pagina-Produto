import styles from './Header.module.css'
import cartIcon from '../../assets/img/cart-regular-24.png'
import menuHamburguerIcon from '../../assets/img/menu-regular-24.png'

export function Header({
  onClick
}) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <header className={styles['header']}>
      <div className={styles['header-logo']}>
        <p>LOGO</p>
      </div>
      <div className={styles['header-form']}>
        <form onSubmit={handleSubmit}>
          <input type={'search'} placeholder='BUSCAR...' className={styles['form-search']} />
        </form>
      </div>
      <div className={styles['header-menu']}>
        <div className={styles['menu-cart']}>
          <span>
            <a href='target_blank'><img src={cartIcon} alt='cart-icon'/></a>
          </span>
        </div>
        <div className={styles['menu-Hamburguer']} onClick={onClick}>
          <span>
            <img src={menuHamburguerIcon} alt='menu-Hamburguer-icon'/>
          </span>
        </div>
      </div>
    </header>
  )
}