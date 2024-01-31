import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from '@mui/material';
import { CartContext } from '../cartContext/page';
import { useContext } from 'react';

export default function ProductsCard({product}) {
// cart implementation
const {state, dispatch} = useContext(CartContext);

console.log(state, 'state')
// const isProductInCart = state.cartData.filter(c=>c.id === action.payload)
const handleAddToCart = (item)=>{
  console.log(item, 'item')
  dispatch({type:"ADD-TO-CART",payload:item})
//  if(!isProductInCart){
//   dispatch({type:"ADD-TO-CART",payload:item})
//  }
//  else{
//   console.log('Product is already in the cart!');
//  }
}
  return (
    <Card sx={{ maxWidth: 345, margin: 1 }} key={product?.productId}>
       
      <CardContent>
        <img src={product?.fullProductImageUrl300} alt={product?.productTitle} style={{ width: '100%' , height:'200px'}} />
      </CardContent>
      <CardContent>
        <p>{product?.productTitle?.slice(0,20)}</p>
        <div className="d-flex justify-content-between">
          <h5>Rs {product?.buyerPrice}</h5>
          <div className="shopping_cart">
            <IconButton color="primary" aria-label="add to shopping cart">
            <button onClick={()=>handleAddToCart(product)}><AddShoppingCartIcon /></button> 
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}