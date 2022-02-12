import React from 'react';
import BreadCrumb from '../BreadCrumb/Breadcrumb';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({array}){
    return (
    <div>
        <div className={styles.navbar}>
        <Link className={styles.link} to="/"><div><img src='https://p.kindpng.com/picc/s/484-4847061_man-resume-document-employee-shortlisted-portfolio-unique-website.png' width='50px' height='55px' alt='logo'/></div><div className={styles.menu}>&emsp;Resume Builder</div></Link>
        <div className={styles.breadcrumb}><BreadCrumb
        array={array}/></div>
        </div>
    </div>
    );
}

export default Navbar;