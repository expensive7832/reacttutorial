import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import commerceConnection from '../commerce'
import { Link } from 'react-router-dom'

function Navbar() {

    const [totalItem, updateTotalItem] = useState(0) 

    useEffect(() =>{

        commerceConnection.cart.retrieve()
        .then((res) => updateTotalItem(res.total_unique_items))
        .catch((err) => console.log(err))

    }, [])

  return (
    <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
    >
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" aria-current="page"
                            >Home
                            <span className="visually-hidden">(current)</span></a
                        >
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dropdownId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >Dropdown</a
                        >
                        <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownId"
                        >
                            <a className="dropdown-item" href="#"
                                >Action 1</a
                            >
                            <a className="dropdown-item" href="#"
                                >Action 2</a
                            >
                        </div>
                    </li>
                </ul>
                
                <Link
                    to="/cart"
                    class="btn btn-danger position-relative"
                >
                    <FaShoppingCart/>
                    <span
                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                    >
                        {totalItem}
                        
                    </span>
                </Link>
                

            </div>
        </div>
    </nav>
    
  )
}

export default Navbar