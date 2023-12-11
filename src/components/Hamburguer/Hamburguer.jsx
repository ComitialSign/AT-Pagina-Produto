import styles from './Hamburguer.module.css'
import chevronDown from '../../assets/img/chevron-down-solid-24.png'

export function Hamburguer({
  className
}) {
  
  return (
    <div className={className}>
      <ul className={styles['nav']}>
        <div className={`${styles['nav-list']} ${styles['nav-home']}`}>
          <li className={styles['list']}><a href='target_blank'>Home</a></li>
        </div>
        <div className={`${styles['nav-list']} ${styles['nav-produtos']}`}>
          <li className={styles['list']}>Produtos<span><img src={chevronDown} /></span></li>
        </div>
        <div className={`${styles['nav-list']} ${styles['nav-conta']}`}>
          <li className={styles['list']}><a href='target_blank'>Minha conta</a></li>
        </div>
        <div className={`${styles['nav-list']} ${styles['nav-suporte']}`}>
          <li className={styles['list']}><a href='target_blank'>Suporte</a></li>
        </div>
      </ul>
    </div >
  )
}