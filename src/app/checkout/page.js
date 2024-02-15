'use client'


import { useCart } from "../cartContext/cartContext";
import { Button, TextField } from "@mui/material";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Form, Field, ErrorMessage } from 'formik';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PersonalDetails from "./checkOut";
// import MyForm from "./checkOut";




const validationSchema = Yup.object({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    mobile: Yup.number().max(10).required('Required'),
    alternateMobile: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
    paymentMode: Yup.string().required('Required'),
});

export default function CartList() {
    const { cart, updateCartQuantity, totalAmount, removeFromCart } = useCart();
    console.log({ cart })

    const handleQuantityChange = (id, quantity) => {
        if (quantity <= 5) {
            updateCartQuantity(id, quantity)
        } else {
            alert('Quantity should be less than 5')
        }
    }



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            alternateMobile: '',
            address: '',
            paymentMode: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            // Handle form submission here
            console.log(values);
            setSubmitting(false);
            alert(JSON.stringify(values));
            // Reset the form after submission
            resetForm();
        },
    });

    // const handleSubmit = (values, { setSubmitting }) => {
    //     // Your form submission logic here
    //     console.log(values);
    //     setSubmitting(false);
    // };

    return (
        <>
            <main className="page">
                <section className="shopping-cart dark">
                    <div className="container">

                        <div className="block-heading">
                            <h2>Checkout</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p> */}
                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-lg-8">

                                    <PersonalDetails />


                                </div>

                                <div className="col-md-4 col-lg-4">
                                    <div className="items">
                                        {
                                            cart && cart.length > 0 && cart.map((item) => {
                                                return (
                                                    <div className="product pb-0 mb-0" key={item.id}>
                                                        <div className="row">
                                                            <div className="col-md-3">
                                                                <img className="img-fluid mx-auto d-block image" src={item?.fullProductImageUrl300} />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="">
                                                                    <div className="row">
                                                                        <div className="col-md-12 product-name">
                                                                            <div className="product-name">
                                                                                <div className="product-info">
                                                                                    <p className="mb-0">{item?.productTitle}</p>
                                                                                    <p>{item?.buyerPrice}</p>

                                                                                </div>
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

                            </div>
                        </div>
                    </div>
                </section>

            </main >
            {/* <MyForm /> */}
        </>
    )
}
