'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import ProductsCard from "./components/ProductsCard";
import { useContext } from "react";
import { ProductContext } from "./context/productContext";
import { useEffect } from "react";
import { loadData } from "./services/api";


export default function Home() {
  //implementation api 
const {state, dispatch} = useContext(ProductContext);
  const handleData = async () => {
    const result = await loadData('https://myshopprime.com/api/zoomi/shop/listing?type=shop&sortBy=recency&pageNo=1&token=mdlhx2p');
    dispatch({type:'LOAD',payload:result});
  }
  console.log({state})
  console.log(state.data, 'banners')
  useEffect(() => {
    handleData()
  },[])




  return (
    <>
      <Hero />
      <div className="container mt-3 mb-5">
        <div className="row">
    
          { state.data && state.data.banners && state.data.banners.length > 0 && state.data.banners.map((banner)=>{
            return(
              <div className="col-lg-4 mb-3" key={banner?.id}>
              <Card>
                <CardContent>
                  <img src={banner?.imageUrl} alt={banner?.bannerName} width="100%" />
                </CardContent>
              </Card>
            </div>
            )
          })}
         
        </div>
      </div>
      <div className="container">
        <Card className="p-4">
          <Typography gutterBottom variant="h5" component="div">
            Best Selling Product
          </Typography>
          <CardContent className="">
          <div className="row">
          {
            state.data && state.data.resellingProducts && state.data.resellingProducts.length>0 && state.data.resellingProducts.map((product)=>{
                return(
                  
                  <div className="col-lg-3" key={product.id}>
                    <ProductsCard  product={product} />
                  </div>
                )
            })
          }
          
          
          </div>

          </CardContent>
        </Card>
      </div>
    </>
  );
}
