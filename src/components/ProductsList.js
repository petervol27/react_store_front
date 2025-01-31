import Product from './Product';
import Grid from '@mui/material/Grid2';
function ProductsList({ products }) {
  return (
    <Grid container spacing={2}>
      {products.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </Grid>
  );
}

export default ProductsList;
