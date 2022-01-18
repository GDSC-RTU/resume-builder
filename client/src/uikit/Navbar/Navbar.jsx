import React from 'react';
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import styles from './navbar.module.css';

function Navbar({array}){
    return (
    <div>
        <div className={styles.navbar}>
        <div className={styles.menu}>123</div>
        <div><BreadCrumb
        array={array}/></div>
        </div>
    </div>
    );
}

export default Navbar;