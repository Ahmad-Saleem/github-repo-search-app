import React from 'react';
import Header from './Header';

const Layout = (props) => 
    <div className='layout-container'>
        <Header />
        <div className='container-fluid'>
            {props.children}
        </div>
    </div>


export default Layout;