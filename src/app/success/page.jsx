'use client'
import { Button,Typography } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
import { useEffect } from "react";
export default function Success() {


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 "></div>
                    <div className="col-lg-6">
                        <div className="m-5">
                            <div className="card p-4 shadow-lg border-0 ">
                                <Typography variant="h1" style={{display:'flex', justifyContent:'center'}}>
                                  <img src="./images/success.gif" alt="" />
                                </Typography>
                                
                                <h2 className="text-success">Your order is confirmed!</h2>
                                <p>We'll send you a shopping confirmation email as soon as your order ships</p>
                                <Link href={'/'}>
                                    <Button size="large" color="primary" type="submit" variant="contained"  >Check Status</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>

        </>
    )
}