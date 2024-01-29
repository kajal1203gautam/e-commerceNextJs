'use client'
import ProductsCard from "../components/ProductsCard"
import Sidebar from "../components/Sidebar"
import { Card } from "@mui/material"
import Badge from '@mui/material/Badge';
import { useContext ,useEffect, useState} from "react";
import { ProductContext } from "../context/productContext";
import { loadData } from "../services/api";
export default function Product(){
    const [productData, setProductData] = useState({});
    const {state, dispatch} = useContext(ProductContext);
    const handleData = async () => {
        const result = await loadData('https://myshopprime.com/api/zoomi/shop/listing?type=shop&sortBy=recency&pageNo=8&token=mdlhx2p');
       console.log(result,'dfghfgh');
       setProductData(result);
      }
      console.log(productData)
      console.log({state})
      useEffect(() => {
        handleData()
      },[])
    return(
        <>
     <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3">
                    <Sidebar />
            </div>
            <div className="col-lg-9">
                <Card sx={{borderRadius:0}}>
                <div className="row mb-3">
                   {
                    productData && productData.resellingProducts && productData.resellingProducts.length>0 && productData.resellingProducts.map((product)=>{
                        return(
                            <div className="col-lg-3">
                                <ProductsCard  product={product} />
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