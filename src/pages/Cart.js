import React, { useEffect, useState } from 'react'
import commerceConnection from '../commerce'

function Cart() {


    const [products, updateProducts] = useState([])

    useEffect(() =>{

        commerceConnection.cart.retrieve()
        .then((res) => updateProducts(res.line_items))
        .catch((err) => console.log(err))

    }, [])
    
  return (
    <div className="container">

        <h2 className='h1 my-5'>Cart</h2>

        <div
            class="table-responsive"
        >
            <table
                class="table table-primary"
            >
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                  
                  {
                    products?.map((pro) =>(
                        <tr className='my-1'>
                            <td><img src={pro?.image?.url} alt="" /></td>
                            <td>{pro?.name}</td>
                            <td>{pro?.quantity}</td>
                            <td>{pro?.price?.formatted_with_symbol}</td>
                        </tr>
                    ))
                  }

                </tbody>
            </table>
        </div>
        

    </div>
  )
}

export default Cart