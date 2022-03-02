import styles from '../styles/ui_price.module.css'

const UIPrice = props => {
  return (
    <div className={styles.priceLabel}>
        <p className={styles.p1}>{props.name}</p>
        <p className={styles.p2}>{props.price}</p>
    </div>
  )
}

export default UIPrice