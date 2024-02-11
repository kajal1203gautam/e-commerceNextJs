'use client'


import { useCart } from "../cartContext/cartContext";
import { Button, TextField } from "@mui/material";

export default function CartList() {
    const { cart,updateCartQuantity,totalAmount, removeFromCart } = useCart();    
    console.log({ cart })

    const handleQuantityChange = (id,quantity) => {
        if(quantity<=5){
            updateCartQuantity(id,quantity)
        }else{
            alert('Quantity should be less than 5')
        }
    }




    return (
        <>
            <main className="page">
                <section className="shopping-cart dark">
                    <div className="container">

                        <div className="block-heading">
                            <h2>Shopping Cart</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p> */}
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-12 col-lg-8">
                                    <div className="items">
                                        {
                                            cart && cart.length > 0 && cart.map((item) => {
                                                return (
                                                    <div className="product" key={item.id}>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img className="img-fluid mx-auto d-block image" src={item?.fullProductImageUrl300} />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="info">
                                                                    <div className="row">
                                                                        <div className="col-md-5 product-name">
                                                                            <div className="product-name">
                                                                                <div className="product-info">
                                                                                    <p className="mb-0">{item?.productTitle}</p>
                                                                                    <p>{item?.buyerPrice}</p>
                                                                                    <Button color="error" variant="contained" onClick={()=>removeFromCart(item.id)}>Remove cart</Button>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-7 quantity">
                                                                            <div className="btn-group">
                                                                                <Button coolor="primary" variant="contained" onClick={()=>handleQuantityChange(item.id,item.quantity?item.quantity+1:2)}>+</Button>
                                                                                <TextField style={{width:100}} label="Quantity" value={item.quantity?item.quantity:1} variant="outlined" />
                                                                                <Button coolor="primary" variant="contained" disabled={!item.quantity || item.quantity && item.quantity==1} onClick={()=>handleQuantityChange(item.id,item.quantity?item.quantity-1:1)}>-</Button>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4">
                                    <div className="summary">
                                        <h3>Summary</h3>
                                        <div className="summary-item"><span className="text">Total</span><span className="price">Rs. {totalAmount()}</span></div>
                                        <button type="button" className="btn btn-primary btn-lg btn-block">Checkout</button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}