import { ShoppingBasket } from "@mui/icons-material"
import { Button, Container, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useAppSelector } from "../hooks/redux"
import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCart(props: any) {

  const cart = useAppSelector((state) => state.cartReducer)

  return (
  <List>
    <>
      <ListItem>
        <ListItemIcon>
          <ShoppingBasket />
        </ListItemIcon>
        <ListItemText primary='Shopping Cart'/>
      </ListItem>
      <Divider />
      {cart.cartItems.length === 0 ? (
        <ListItem>
          Cart is currently empty!
        </ListItem>
      ) : (
        cart.cartItems.map((item) => {
          <ShoppingCartItem/>
        })
      )}
    </>
  </List>
  )
}
export default ShoppingCart