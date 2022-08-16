import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Product } from "../types/products"

function SingleProduct({id, images, title, description, price, category}: Product) {
  return (
    <Grid item xs={12} md={4} key={id}>
      <Card sx={{margin: '10px'}}>
        <CardMedia
          component={'img'}
          // image={product.images[0]}
          image={images[0]}
          alt={description}
          title={title}
          sx={{height: 140}}   
        />
        <CardContent>
          <Typography
            variant='h6'
            component='h3'
          >
            {title}
          </Typography>
          <Typography variant='body1'>
            Price: {price} €
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='text'
          >Add to cart</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default SingleProduct