import { useState } from 'react'
import styles from './Accordion.module.css'
import chevronDown from '../../../assets/img/chevron-down-solid-24.png'

export function Accordion({
  accordionStyle,
  title,
  content,
  contentStyle
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div onClick={() => setIsExpanded(prevState => !prevState)}
        className={`${accordionStyle}`}>
        <div className={styles['title-style']}>
          {title}
          <span>
            <img className={`${styles['chevron-transform']} ${isExpanded ? styles['open'] : ''}`} 
              src={chevronDown} alt='chevronDown' />
          </span>
        </div>
      </div>
      {isExpanded && (
        <div className={contentStyle}>
          {content}
        </div>)}
    </>
  )
}