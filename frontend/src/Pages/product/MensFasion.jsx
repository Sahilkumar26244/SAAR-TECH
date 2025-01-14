import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import styles from "./Style/Mens.module.css";
import Pagination from "../../Components/Pagination"
import Filters from "../../Components/Filters"
// import Filters from "../Components/Filters";
import { getProduct } from "../../Redux/AppReducer/action";



  const MensFasion = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const products = useSelector((store) => store.AppReducer.products);
  
    const location = useLocation();
  //  console.log("totals",Math.ceil(products.length/12))
  
  //  const total = products.length/12
   
    useEffect(() => {
      if (location || products.length === 0) {
        const category = searchParams.getAll("category");
        const brand = searchParams.getAll("brand")
        //  const page = searchParams.getAll("page")
        const queryParams = {
          params: {
            category: category,
            brand:brand,
            _sort: searchParams.get("sortBy") && "price",
            _order: searchParams.get("sortBy"),
            _page : page,
            _limit : 12,
          },
        };
      dispatch(getProduct(queryParams));
      }
    }, [location,page]);
  
    return (
      <div style={{width:"90%",display:"flex",flexDirection:"column",margin:"auto",justifyContent:"center"}}>
        <div className={styles.topcard}>
          <div className={styles.sidebar}>
            <div style={{ marginLeft: "30px" }}>
              <h1 style={{ fontWeight: "bolder", marginBottom: "20px" }}>
                Men's Fashion
              </h1>
              <p>Watches</p>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Luggage & Travel Bags</p>
              <p>Accessories</p>
              <p>Socks</p>
              <p>Jewelry</p>
  
              <p>Watches</p>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Luggage & Travel Bags</p>
              <p>Accessories</p>
              <p>Socks</p>
              <p>Jewelry</p>
              <p>Watches</p>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Luggage & Travel Bags</p>
              <p>Accessories</p>
              <p>Socks</p>
              <p>Jewelry</p>
              <p>Watches</p>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Luggage & Travel Bags</p>
              <p>Accessories</p>
              <p>Socks</p>
              <p>Jewelry</p>
              <p>Watches</p>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Luggage & Travel Bags</p>
              <p>Accessories</p>
              <p>Socks</p>
              <p>Jewelry</p>
              <p>Watches</p>
              <p>Shoes</p>
              <p>Clothing</p>
              <p>Luggage & Travel Bags</p>
              <p>Accessories</p>
              <p>Socks</p>
              <p>Jewelry</p>
            </div>
            <div
              style={{
                border: "0.5px solid lightgrey",
                marginBottom: "20px",
                marginTop: "20px",
                marginLeft: "26px",
              }}
            ></div>
            <div style={{ marginLeft: "30px" }}>
              <h1 style={{ fontWeight: "bolder", marginBottom: "20px" }}>
                NARROW SEARCH RESULTS
              </h1>
              <p>ON SALE</p>
              <p>IN STOCK</p>
              <p>CLEARANCE</p>
              <h4 style={{ marginTop: "20px" }}>New Arrivals</h4>
            </div>
          </div>

          <div className={styles.allfilterandproduct}>

            <div>
              <Filters/>
            </div>
            <div className={styles.maincard}>
              {products.length > 0 &&
                products.map((item) => (
                  <div  className={styles.mainsmallcard}>
                    
                    <ProductCard   key={item.id}
                    item={item}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        productsId={item.id} 
                        discount={item.discount}
                        per={item.per} />
                    
                  </div>
                ))}
            </div>
          </div>
          
        </div>
        
        <Pagination  total={10} current={page} onChange={(value)=> setPage(value)} />
      </div>
    );
  };


  export default MensFasion;