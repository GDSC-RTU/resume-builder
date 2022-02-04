import React from 'react';
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({array}){
    return (
    <div>
        <div className={styles.navbar}>
        <Link className={styles.link} to="/"><div className={styles.menu}>Resume Builder</div></Link>
        <div className={styles.breadcrumb}><BreadCrumb
        array={array}/></div>
        </div>
    </div>
    );
}

export default Navbar;