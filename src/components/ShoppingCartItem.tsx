import { Close } from '@mui/icons-material'
import { Avatar, Box, Divider, IconButton, ListItem, Typography } from '@mui/material'

import { ProductInCart } from '../types/cart'

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