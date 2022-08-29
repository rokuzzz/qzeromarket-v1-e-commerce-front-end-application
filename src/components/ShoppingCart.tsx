import { ShoppingBasket } from "@mui/icons-material"
import { Button, Container, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Paper, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks/redux"
import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCart() {

  const {cartItems, total} = useAppSelector((state) => state.cartReducer)

  const renderCartContent = cartItems.map((cartItem) => (
    <ShoppingCartItem key={cartItem.id} 
    id={cartItem.id}
    title={cartItem.title}
    description={cartItem.description}
    price={cartItem.price}
    category={cartItem.category}
    images={cartItem.images}
    quantity={cartItem.quantity}
    />
  ))
  
  let totalPrice = 0
  for(let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].price * cartItems[i].quantity
  }

  return (
    <Box
      sx={{p: 1}}
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
    >
      <Typography variant="h4" sx={{mt: 3}}>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Paper
          elevation={0}
          sx={{
            mt: 2,
             width: '90%',
            padding: 3
          }}
        >
          <Typography variant="h5">
            Cart is currently empty x_x
           </Typography>
         </Paper>
      ) : (
        <>
          <Paper
            elevation={0}
            sx={{
              mt: 1,
              width: '90%',
              padding: 2
            }}
          >
            {renderCartContent}
          </Paper>
          <Paper
            elevation={0}
            sx={{
              mt: 0,
              width: '90%',
              padding: 2
            }}
          >
            <Typography variant="h5">
              Total: {totalPrice}€
            </Typography>
          </Paper>
          <Button sx={{mt: 2}} variant='contained'>
            Proceed to payment
          </Button>
        </>
      )}
    </Box>
    
  )
}
export default ShoppingCart