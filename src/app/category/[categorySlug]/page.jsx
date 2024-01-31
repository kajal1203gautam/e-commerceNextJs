
'use client'

import ProductsCard from "@/app/components/ProductsCard";
import { useState , useEffect, useContext} from "react";
import { ProductContext } from "@/app/context/productContext";
import { loadData } from "@/app/services/api";
import { useParams } from "next/navigation";

export default function Categories() {
const [categories, setCategories] = useState([]);
const {categorySlug} = useParams()
    let page = 0;
    const handleData = async () => {
        page++;
        console.log("called data", page)
        if (page <= 50) {
            const result = await loadData(`https://myshopprime.com/api/zoomi/shop/${categorySlug}/listing?type=shop&sortBy=recency&pageNo=${page}&token=mdlhx2p`);
            setCategories((prevData) => [...prevData, ...result.resellingProducts]);
        }}
    console.log({ categories })
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
            <div className="container">
                <div className="row">
                   {
                    categories  && categories.length>0 && categories.map((product)=>{
                        return (
                            <div className="col-lg-3">
                                <ProductsCard product={product} />
                            </div>
                        )
                    })
                   }
                   {
                    categories.length==0 &&
                    <>
                    <div className="no-data-found">
                        <h5>No data found!</h5>
                    </div>
                    </>
                   }
                  
                </div>
            </div>
        </>
    )
}
