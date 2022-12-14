import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'This is the first book I wrote.',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: 'This is the second book I wrote.',
  },
  {
    id: 'p3',
    price: 7,
    title: 'My Third Book',
    description: 'This is the third book I wrote.',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
