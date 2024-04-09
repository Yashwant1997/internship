import React from 'react'
import { NavLink } from 'react-router-dom'



const HeaderComponent = () => {
    return (
        <div >
            <header className='shadow sticky-top z-index-50'>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div >
                        <a href='/list' className='navbar-brand'>
                            Management Application
                        </a>
                    </div>
                    <div className='collapse navbar-collapse '>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <NavLink to="/register" className="nav-link btn btn-outline-success me-2">Register</NavLink>
                            </li>
                        </ul>
                        
                        <ul className='navbar-nav ' >
                                <li className='nav-item'>
                                    <NavLink to="/login" className="nav-link btn btn-outline-success me-2">Login</NavLink>
                                </li>
                        </ul>
                        
                    </div>
                    {/* <ul className='navbar-nav'>                       
                        <li className='nav-item'>
                        <NavLink to="/register" className="nav-link btn btn-outline-success me-2">Register</NavLink>
                    </li>
                </ul>
                <ul className='navbar-nav'>                       
                        <li className='nav-item'>
                        <NavLink to="/register" className="nav-link btn btn-outline-success me-2">Login</NavLink>
                    </li>
                </ul> */}



                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent

// <div className="flex items-center lg:order-2">
{/* <a
href="#"
className="btn btn-outline-success me-2"
>
Login
</a>
<a
href="#"
className="btn btn-primary"
>
Register
</a>
</div> */}