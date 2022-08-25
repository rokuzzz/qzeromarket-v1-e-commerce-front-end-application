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
  return (
    <Box
      sx={{p: 2}}
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
    >
      <Typography variant="h3">
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Paper
          elevation={4}
          sx={{
            mt: 2,
             width: '90%',
            padding: 3
          }}
        >
           Cart is currently empty :\
         </Paper>
      ) : (
        <>
          <Paper
            elevation={4}
            sx={{
              mt: 2,
              width: '90%',
              padding: 3
            }}
          >
            {renderCartContent}
          </Paper>
          <Button sx={{mt: 1}} variant='contained'>
            Proceed to payment
          </Button>
        </>
      )}
    </Box>
    
  )
}
export default ShoppingCart