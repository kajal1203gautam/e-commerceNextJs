// components/PriceDetails.js
import { useState, useEffect } from 'react';

const PriceDetails = ({ productPrice, discountPercentage, deliveryCharge }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate discounted price
    const discountedPrice = productPrice - (productPrice * discountPercentage) / 100;

    // Calculate total price including delivery charge
    const totalPriceWithDelivery = discountedPrice + deliveryCharge;

    setTotalPrice(totalPriceWithDelivery);
  }, [productPrice, discountPercentage, deliveryCharge]);

  return (
    <div>
      <h2>Price Details</h2>
      <p>Product Price: ${productPrice}</p>
      <p>Discount: {discountPercentage}%</p>
      <p>Delivery Charge: ${deliveryCharge}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default PriceDetails;
