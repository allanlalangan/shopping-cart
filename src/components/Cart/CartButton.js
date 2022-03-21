import classes from './CartButton.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.items)

  const toggleDisplayHandler = (e) => {
    dispatch(cartActions.toggle())
  }

  return (
    <button onClick={toggleDisplayHandler} className={classes['cart-button']}>
      <span className={classes['cart-button-text']}>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  )
}

export default CartButton
