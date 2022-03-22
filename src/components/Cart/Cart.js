import Card from '../UI/Card'
import styles from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => {
          return <CartItem key={Math.random().toString()} item={item} />
        })}
      </ul>
    </Card>
  )
}

export default Cart
