import Product from './Product';

function ProductsList({ products }) {
  return (
    <div className="container">
      {products.map((product, index) => {
        return <Product key={index} product={product} index={index} />;
      })}
    </div>
  );
}

export default ProductsList;
