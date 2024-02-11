import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
import { useCart } from '../cartContext/cartContext';

export default function ProductsCard({product}) {
// cart implementation
// const {stateCart, dispatchCart} = useContext(CartContext);
const {cart, addToCart,isInCart, removeFromCart}= useCart();

const handleAddToCart = (item)=>{
  addToCart(item)
  // console.log(item, 'item')
  // dispatchCart({type:"ADD-TO-CART",payload:item})
}

const handleRemoveFromCart = (item)=>{
  removeFromCart(item.id)
}
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }} key={product?.productId}>
       
      <CardContent>
        <img src={product?.fullProductImageUrl300} alt={product?.productTitle} style={{ width: '100%' , height:'200px'}} />
      </CardContent>
      <CardContent>
        <p>{product?.productTitle?.slice(0,20)}</p>
        <div className="d-flex justify-content-between">
          <h6 className='' style={{marginTop:'18px'}}>Rs {product?.buyerPrice}</h6>
          <div className="shopping_cart">
            {isInCart(product.id) ?<>
              <button onClick={()=>removeFromCart(product.id)} style={{border:'0', backgroundColor:'white', color: 'red',fontSize:'15px'}}>Remove</button>
            </>:
            <IconButton onClick={()=>addToCart(product)} color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
            </IconButton>
            }
            
          

          </div>
        </div>
      </CardContent>
    </Card>
  );
}