import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid2';
import {
  Container,
  Card,
  Box,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Rating,
  IconButton,
  CardActionArea,
} from '@mui/material';
function Product({ product }) {
  return (
    <Grid size={4}>
      <Container>
        <Card sx={{ textAlign: 'center', maxWidth: '400px', height: '650px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              height="300"
            ></CardMedia>
          </CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h5" marginBottom={1}>
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              component="body2"
              sx={{ color: 'gray' }}
            >
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Container>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="body1" component="body1">
                  Rating:
                </Typography>
                <Rating value={product.rating.rate} readOnly />
                <Typography variant="subtitle1" component="subtitle1">
                  ({product.rating.count} Reviews)
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h4" component="h4">
                  ₪{product.price}
                </Typography>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon fontSize="large" />
                </IconButton>
              </Box>
            </Container>
          </CardActions>
        </Card>
      </Container>
    </Grid>
  );
}

export default Product;
