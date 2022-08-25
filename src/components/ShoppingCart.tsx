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
    // <List>
    //   <>
    //     <ListItem>
    //       <ListItemIcon>
    //         <ShoppingBasket />
    //       </ListItemIcon>
    //       <ListItemText primary='Shopping Cart'/>
    //     </ListItem>
    //     <Divider />
    //     {cartItems.length === 0 ? (
    //       <ListItem>
    //         Cart is currently empty!
    //       </ListItem>
    //     ) : (
    //       <ListItem>
    //         {renderCartItems}
    //       </ListItem>
    //     )}
    //   </>
    // </List>
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
    </Box>
    
  )
}
export default ShoppingCart