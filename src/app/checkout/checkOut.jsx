import React from 'react';
import { Button, TextField } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useFormik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import { useEffect } from "react";
import { useCart } from '../cartContext/cartContext';

const validationSchema = Yup.object({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please enter your name'),
  email: Yup.string().email('Invalid email').required('Please enter your email'),
  mobile: Yup.number().min(1000000000, 'Invalid mobile number').max(9999999999, 'Invalid mobile number').required('Please enter your 10 digit number'),
  alternateMobile: Yup.number().min(1000000000, 'Invalid mobile number').max(9999999999, 'Invalid mobile number').required('Please enter your 10 digit alternate number'),
  address: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Please enter your address'),
  paymentMode: Yup.string().required('Please select payment mode'),
});

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

const PersonalDetails = () => {
  const {cart} = useCart();
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
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here
      console.log(values);
      alert(JSON.stringify(values));
      // Reset the form after submission
      resetForm();
    },
  });

  const handleResetCart = () => {
    if(localStorage && localStorage.getItem("cart")){
      localStorage.clear();
  }
  }
  console.log(localStorage.getItem("cart"));
  useEffect(() => {
    handleResetCart();
  }, [cart]);
   

  return (

    <div className="card p-2">
      <div className="card-header"> <h3 className="mb-0">Personal address</h3> </div>
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6 mb-2">
              <input component={TextField} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} type='name' label="Name" placeholder='Name' name="name" className='form-control' variant="outlined" style={{ width: "100%" }} />
              {formik.touched.name && formik.errors.name && <div className='text-danger'>{formik.errors.name}</div>}
            </div>
            <div className="col-lg-6 mb-2">
              <input component={TextField} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type='email' label="Email" name="email" placeholder='Email' className='form-control' variant="outlined" style={{ width: "100%" }} />
              {formik.touched.email && formik.errors.email && <div className='text-danger'>{formik.errors.email}</div>}
            </div>
            <div className="col-lg-6 mb-2">
              <input component={TextField} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mobile} type='tel' label="Mobile" name="mobile" placeholder='Mobile' className='form-control' variant="outlined" style={{ width: "100%" }} />
              {formik.touched.mobile && formik.errors.mobile && <div className='text-danger'>{formik.errors.mobile}</div>}
            </div>
            <div className="col-lg-6 mb-2">
              <input component={TextField} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.alternateMobile} type='tel' label="Alternate mobile" placeholder='AlternateMobile' className='form-control' name="alternateMobile" variant="outlined" style={{ width: "100%" }} />
              {formik.touched.alternateMobile && formik.errors.alternateMobile && <div className='text-danger'>{formik.errors.alternateMobile}</div>}
            </div>
            <div className="col-lg-12 mb-2">
              <input component={TextField} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} type='address' label="Full address" name="address" variant="outlined" placeholder='Address' className='form-control' style={{ width: "100%" }} />
              {formik.touched.address && formik.errors.address && <div className='text-danger'>{formik.errors.address}</div>}
            </div>
            <div className="col-lg-12 mb-2">
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Payment method</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="paymentMode"
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.paymentMode}
                >
                  <FormControlLabel value="online" control={<Radio />} label="Online" />
                  <FormControlLabel value="cod" control={<Radio />} label="COD (Cash on delivery)" />
                  {formik.touched.paymentMode && formik.errors.paymentMode && <div className='text-danger'>{formik.errors.paymentMode}</div>}
                </RadioGroup>
              </FormControl>
            </div>
            <div className="col-lg-12 mb-2">
              <Button size="large" color="primary" type="submit" variant="contained" className='me-3'>Submit </Button>
              <Link href={'/success'}>
                <Button size="large" color="primary" type="submit" variant="contained" onClick={()=>handleResetCart()}>Continue </Button>
              </Link>
            </div>

          </div>
        </form>
      </div>

    </div>






    // <form onSubmit={formik.handleSubmit}>
    //   <div>
    //     <label htmlFor="name">Name:</label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.name}
    //     />
    //     {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
    //   </div>

    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="text"
    //       id="email"
    //       name="email"
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //       value={formik.values.email}
    //     />
    //     {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
    //   </div>

    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default PersonalDetails;
