import styles from './CartButton.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.items)
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0)

  const toggleDisplayHandler = (e) => {
    dispatch(cartActions.toggle())
  }

  return (
    <button onClick={toggleDisplayHandler} className={styles['cart-button']}>
      <span className={styles['cart-button-text']}>My Cart</span>
      <span className={styles.badge}>{totalCartItems}</span>
    </button>
  )
}

export default CartButton
