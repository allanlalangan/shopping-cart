import styles from './Card.module.css'

const Card = (props) => {
  return (
    <li className={`${styles.card} ${props.className}`}>{props.children}</li>
  )
}

export default Card
