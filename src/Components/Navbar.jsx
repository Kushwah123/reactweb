import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className=" nav">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZUUzr-VDjfNKF5xPK1pqcgcAXhd8YRuxvUgoI4-3-aA&s" id="logo"/>
        <select className="Category">
          <option value=" " disabled selected hidden>Category</option>
          <option value=" Recharge">Recharge</option>
          <option value=" Bill Payment">Bill Payment</option>
          <option value="Cosmetic & Personal Care ">Cosmetic & Personal Care</option>
          <option value="Finance & Legal Services ">Finance & Legal Services</option>
          <option value=" Repair & Maintenance"> Repair & Maintenance</option>
          <option value=" Tech Development & IT Solutions">Tech Development & IT Solutions </option>
          <option value=" Electronics & Electricals"> Electronics & Electricals</option>
          <option value=" Events & Parties"> Events & Parties</option>
          <option value="Accessories ">Accessories </option>
        </select>
        <div className="form">
        <input type="text" placeholder=" Search..." id="search"/>
           <button id="search1">Search</button>
           </div>
           <div className=" locality">
           <h5 id="locality"> What's in Your Locality?</h5>
           </div>
           <div className="icons">
            <img src="https://c8.alamy.com/comp/2GGDBAB/gift-card-icon-vector-for-graphic-design-logo-website-social-media-mobile-app-ui-illustration-2GGDBAB.jpg" alt="" className="icon" />
            <img src="https://img.lovepik.com/free-png/20210926/lovepik-mobile-phone-icon-png-image_401486772_wh1200.png" alt="" className="icon" />
            <img src="https://i.pinimg.com/170x/e0/e0/b2/e0e0b255d6e60d8e707334396a08bcde.jpg" alt=" " className="icon" />
            <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt=" " className="icon" />
            <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJXWdvwDZC0RF_VSzzP8aXSX9Sc_VPAtuew&usqp=CAU" alt="" className="icon" />
            <select id="leftsite">
              <option disabled selected hidden></option>
              <option> Profile</option>
              <option> Support</option>
              <option>Login/Sign-up</option>
            </select>
            
           </div>
        </div>
        
    {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Recat User
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/Login">
                Login
              </NavLink>
            </li>
            
          </ul>
        </div>

        <Link className="btn btn-outline-light" to="users/AddUser">Add User</Link>
      </div>
    </nav> */}
    </>
  );
};

export default Navbar;