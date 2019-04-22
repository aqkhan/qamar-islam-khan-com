import React from 'react';
import { Link } from 'gatsby';
import MetaData from './MetaData';

export default () => (
    <React.Fragment>
        <MetaData />
        <div className="columns is-mobile">
            <div className="column" style={{marginBottom: '40px'}}>
                <h2><Link to="/">Logo here</Link></h2>
            </div>
            <div className="column dropdown-cont" style={{backgroundColor: 'rgb(131, 131, 132)'}}>
                <ul className="container dropdown-ul" style={{listStyle: 'none', marginBottom: 'unset'}}>
                    <li className="dropdown"><Link to="/about">About</Link>
                        <ul className="dropdown-list" style={{listStyle: 'none'}}>
                            <li><a href="#"> Alpha 1 </a></li>
                            <li><a href="#"> Alpha 2 </a></li>
                            <li><a href="#"> Alpha 3 </a></li>
                            <li><a href="#"> Alpha 4 </a></li>
                        </ul>
                    </li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </div>
    </React.Fragment>
)
// , marginLeft: '-25%', marginRight: '-25%', paddingLeft: '25%', paddingRight: '25%'
// style={{float: 'left'}}