import styles from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

const CartItem = (props) => {
  const dispatch = useDispatch()
  const cartItem = props.item
  const { title, price, quantity } = cartItem

  const subQtyHandler = () => {
    dispatch(cartActions.subQty(cartItem))
  }

  const addQtyHandler = () => {
    dispatch(cartActions.addQty(cartItem))
  }

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={subQtyHandler}>-</button>
          <button onClick={addQtyHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
