import ProductItem from './ProductItem'
import classes from './Products.module.css'
import products from '../../dummyProducts'

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>All Products</h2>
      <ul className={classes['products-list']}>
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
