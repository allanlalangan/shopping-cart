import ProductItem from './ProductItem'
import styles from './Products.module.css'
import products from '../../dummyProducts'

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>All Products</h2>
      <ul className={styles['products-list']}>
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default Products
