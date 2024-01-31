'use client'
import ProductsCard from "../components/ProductsCard"
import Sidebar from "../components/Sidebar"
import { Card } from "@mui/material"
import Badge from '@mui/material/Badge';
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import { loadData } from "../services/api";
export default function Product() {
    const [productData, setProductData] = useState([]);
    let page = 0;
    const handleData = async () => {
        page++;
        console.log("called data", page)
        if (page <= 50) {
            const result = await loadData(`https://myshopprime.com/api/zoomi/shop/listing?type=shop&sortBy=recency&pageNo=${page}&token=mdlhx2p`);
            setProductData((prevData) => [...prevData, ...result.resellingProducts]);
        }}
    console.log({ productData })
    const handleScroll = () => {
        // Check if the user has scrolled to the bottom of the page
        if (
            typeof window !== 'undefined' && window.innerHeight + window.scrollY >= document.body.offsetHeight - 210
        ) {
            handleData();
        }
    };
    useEffect(() => {
        handleData()
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9">
                        <Card sx={{ borderRadius: 0 }}>
                            <div className="row mb-3">
                                {
                                    productData && productData.length > 0 && productData.map((product) => {
                                        return (
                                            <div className="col-lg-3">
                                                <ProductsCard product={product} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}