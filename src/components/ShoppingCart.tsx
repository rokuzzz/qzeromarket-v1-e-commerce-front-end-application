import { ShoppingBasket } from "@mui/icons-material"
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"

function ShoppingCart(props: any) {
  const {
    isOpen,
    closeCart = Function.prototype,
    order,
    removeFromOrder
  } = props

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={closeCart}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary='Cart'/>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default ShoppingCart