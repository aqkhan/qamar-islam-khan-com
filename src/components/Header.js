import React from 'react';
import { Link } from 'gatsby';
import MetaData from './MetaData';


export default () => (
    <React.Fragment>
        <MetaData />
        
 
          <div className="columns is-mobile">
     <div className="column dropdown-cont1" style={{backgroundColor: '#313131'}}>
             <ul className="container dropdown-ul1" style={{listStyle: 'none', marginBottom: 'unset', marginTop: '0'}}>
                 <li className="dropdown"><Link to="/about">About</Link></li>
                 <li><Link to="/about">Contacts</Link></li>
                 <li><Link to="/blog">Advertise</Link></li>
             </ul>
             <div className="right-nav">
             <div className="header-icons">
             <a><i className="fa fa-facebook"></i></a>
             <a><i className="fa fa-twitter"></i></a>
             <a><i className="fa fa-google-plus"></i></a>
             <a><i className="fa fa-instagram"></i></a>
             <a><i className="fa fa-pinterest"></i></a>
             </div>
             <div className="right-nav-butt">
                <button className="login-button">LOG IN</button>
             </div>
             <hr className="right-nav-hr"></hr>
             <div className="date-container">
                <div><h3>23</h3></div>
                <div className="date-cont-p">
                    <p>APR</p>
                    <p>2019</p>
                </div>
             </div>
             </div>
         </div>
         <div className="column">
             <h2><Link to="/">Logo here</Link></h2>
         </div> 
          <div className="column dropdown-cont" >
             <ul className="container dropdown-ul" style={{listStyle: 'none', marginBottom: 'unset'}}>
                 <li className="dropdown nav-below col"><Link to="/about">HOME</Link>
                 <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                     <ul className="dropdown-list" style={{listStyle: 'none'}}>
                         <li><a href="#"> Alpha 1 </a></li>
                         <li><a href="#"> Alpha 2 </a></li>
                         <li><a href="#"> Alpha 3 </a></li>
                         <li><a href="#"> Alpha 4 </a></li>
                     </ul>
                 </li>
                 <li className="dropdown nav-below col-1"><Link to="/about">FEATURES</Link>
                 <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                     <ul className="dropdown-list" style={{listStyle: 'none'}}>
                         <li><a href="#"> Alpha 1 </a></li>
                         <li><a href="#"> Alpha 2 </a></li>
                         <li><a href="#"> Alpha 3 </a></li>
                         <li><a href="#"> Alpha 4 </a></li>
                     </ul>
                 </li>
                 <li className="dropdown nav-below col-1"><Link to="/about">BLOG STYLES</Link>
                 <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                     <ul className="dropdown-list" style={{listStyle: 'none'}}>
                         <li><a href="#"> Alpha 1 </a></li>
                         <li><a href="#"> Alpha 2 </a></li>
                         <li><a href="#"> Alpha 3 </a></li>
                         <li><a href="#"> Alpha 4 </a></li>
                     </ul>
                 </li>
                 <li className="dropdown nav-below col-1"><Link to="/about">MEGA MENU</Link>
                 <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                     <ul className="dropdown-list" style={{listStyle: 'none'}}>
                         <li><a href="#"> Alpha 1 </a></li>
                         <li><a href="#"> Alpha 2 </a></li>
                         <li><a href="#"> Alpha 3 </a></li>
                         <li><a href="#"> Alpha 4 </a></li>
                     </ul>
                 </li>
                 <li className="dropdown nav-below col-1"><Link to="/about">SHOP</Link>
                 <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                     <ul className="dropdown-list" style={{listStyle: 'none'}}>
                         <li><a href="#"> Alpha 1 </a></li>
                         <li><a href="#"> Alpha 2 </a></li>
                         <li><a href="#"> Alpha 3 </a></li>
                         <li><a href="#"> Alpha 4 </a></li>
                     </ul>
                 </li>
             </ul>
         </div> 
         <div className="container style-and-line">
             <h1 className="style-heading">
                 Style & Design
             </h1>
             <hr className="style-line"></hr>
         </div>
        </div>
    </React.Fragment>
)