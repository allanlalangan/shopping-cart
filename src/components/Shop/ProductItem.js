import Card from '../UI/Card'
import styles from './ProductItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const addItemToCartHandler = () => {
    const cartItem = { title: props.title, price: props.price, quantity: 1 }
    dispatch(cartActions.addItem(cartItem))
  }

  return (
    <Card className={styles['item-card']}>
      <header>
        <h3>{props.title}</h3>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </header>
      <p>{props.description}</p>
      <div className={styles.actions}>
        <button onClick={addItemToCartHandler} className={styles['add-btn']}>
          Add to Cart
        </button>
      </div>
    </Card>
  )
}

export default ProductItem
