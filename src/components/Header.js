import React from 'react';
import { Link } from 'gatsby';
import MetaData from './MetaData';

export default () => (
    <React.Fragment>
        <MetaData />
        <div className="columns is-mobile">
            <div className="column">
                    <h2><Link to="/">Logo here</Link></h2>
            </div>
            <div className="column" style={{float: 'right'}}>
                <ul style={{listStyle: 'none', display: 'inline-block'}}>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
        </div>
    </React.Fragment>
)