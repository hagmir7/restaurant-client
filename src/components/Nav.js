import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom bg-white shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FastFood</Link>
                <Link className='navbar-toggler' to='/menu'><span className="navbar-toggler-icon"></span></Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categories">Categoies</Link>
                        </li>
                    </ul>
                    <Link to='/login' className='btn btn-outline-primary rounded-pill mx-2'>Login</Link>
                    <Link to='/register' className='btn btn-outline-success rounded-pill mx-2'>Register</Link>
                </div>
            </div>
        </nav>
    )
}
