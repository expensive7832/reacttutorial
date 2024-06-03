import React, { useState, useEffect } from "react";
import Navbar from "./../components/Navbar";
import Banner from "../components/Banner";

import bg from "./../images/colin-2x.jpg";
import Card from "../components/Card";

import { FaShoppingCart } from "react-icons/fa"

import img1 from "./../images/logo192.png";
import { Link } from "react-router-dom";

import commerceConnection from "../commerce";

function Home() {

  let [a, updateA] = useState("1")

  let [categories, updateCategories] = useState([])
  let [products, updateProducts] = useState([])

  function handleClick(){
    updateA(100)

  }

  
  useEffect(() =>{

   commerceConnection.categories.list()
   .then((res) => updateCategories(res.data))
   .catch((err) => console.log(err))


  }, [])


  useEffect(() =>{

    commerceConnection.products.list()
    .then((res) => updateProducts(res.data) )
    .catch((err) => console.log(err))

  }, [])


  function addToCart(id){
    commerceConnection.cart.add(id)
    .then((res) => 
      {
        alert("product added succesfully")
        window.location.reload()
  })
    .catch((err) => console.log(err))
  }



  return (
    <div>
      <Navbar />
      <Banner text="HomePage" img={bg} />

      <div className="container">
        <div className="row">
         
         {
          categories?.map((category) =>(
            <div className="col-md-4 card">
              <img src={category?.assets[0]?.url}  className="card-img-top" style={{width: "4rem"}}/>
              <h3>{category?.name}</h3>
            </div>
          ))
         }


        </div>
      </div>



         <div className="container my-5">

          <h3>All Products</h3>

          <div className="row">

            {
              products?.length === 0 ?

              <h3 className="text-warning fw-bold">No Products!!! check back later</h3>

              :

              products?.map((product) =>(
                <div className="col-md-4 card">
                  <img src={product?.image?.url} className="card-img-top" alt="" />
                 <div className="card-body">
                   <h3>{product?.name}</h3>
                   <p>{product?.price?.formatted_with_symbol}</p>
                 </div>
                 <div className="card-footer">
                   <Link to={`/product/${product?.id}`} className="btn btn-primary">View</Link>
                   <button onClick={() => addToCart(product?.id)} className="btn btn-danger">
                    <FaShoppingCart/>
                   </button>
                 </div>
                </div>
              ))
            }

          </div>

         </div>
    

  


    </div>
  );
}

export default Home;
