import { Avatar, Box, Button, ButtonGroup, Divider, IconButton, ListItem, Typography } from '@mui/material'

import { useAppDispatch } from '../../hooks/redux'
import { addToCart, decreaseCart } from '../../redux/reducers/cartReducer'
import { ProductInCart } from '../../types/cart'

function ShoppingCartItem(
    {
      id,
      title, 
      description, 
      price, 
      category, 
      images, 
      quantity
    }: ProductInCart
  ) {
  const dispatch = useAppDispatch()

  const handleAddToCart = (product: ProductInCart) => {
    dispatch(addToCart(product))
  }

  const handleDecreaseCart = (cartItem: ProductInCart) => {
    dispatch(decreaseCart(cartItem))
  }
  return (
    <Box key={id}>
      <Box 
        display='flex'
        alignItems='start'
        justifyContent={'space-between'}
        sx={{pt: 2, pb: 2}}
      >
        <Avatar variant='rounded' src={images[0]} sx={{width: 96, height: 96, mr: 1}} /> 
        <Box display='flex' flexDirection={'column'}>
          <Typography variant='h5' lineHeight={1} sx={{fontWeight: 'medium', mb: 1}}>
            {title}
          </Typography>
          <Typography variant='subtitle2' lineHeight={1.3} sx={{color: '#495057', opacity: 0.7}}>
            {description}
          </Typography>
          <ButtonGroup 
            variant="outlined" 
            size="small" 
            aria-label="small outlined button group"
            sx={{mt: 1}}
          >
            <Button 
              onClick={() => handleAddToCart({id, images, title, description, price, category, quantity})}>
              +
            </Button>
            <Button  disabled>
              <Typography>
                {quantity}
              </Typography>
            </Button>
            <Button onClick={() => handleDecreaseCart({id, images, title, description, price, category, quantity})}>
              -
            </Button>
          </ButtonGroup>
        </Box>
        <Typography variant='body2' sx={{fontWeight: 'bold', ml: 1}}>
          €{price * quantity}
        </Typography>
      </Box>
      <Divider variant='inset'/>
    </Box>
  )
}

export default ShoppingCartItem