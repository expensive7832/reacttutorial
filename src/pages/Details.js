import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import commerceConnection from '../commerce'

import loader from "./../images/loading.gif"

function Details() {

    const { id } = useParams()

    const [product, updateProduct] = useState(null)

    useEffect(() =>{

        commerceConnection.products.retrieve(id)
        .then((res) => updateProduct(res))
        .catch((err) => console.log(err))

    }, [])

  return (
    <div className="container">

       {
        product === null ? 

        <img className='position-absolute top-50 start-50 translate-middle' src={loader} alt="" />

        :

        <div className="row">


        <div className="col-md-6">
            <img src={product?.image?.url} alt="" className="w-100 " />

            <div  className='my-4 d-flex gap-2 flex-wrap'>

                {product?.assets?.map((pro) =>(
                    <img src={pro?.images?.url} alt="" />
                ))}

            </div>
        </div>

        <div className="col-md-6">
            <button className="btn btn-primary">{product?.categories?.name}</button>

            <h4 dangerouslySetInnerHTML={{
                __html: product?.description
            }}>
                
            </h4>
        </div>

        </div>
        
       }

    </div>
  )
}

export default Details