import styles from './landing.module.css';
import { Link } from 'react-router-dom';

function LandingPage(){
    return(
    <div>
        <h1 className={styles.title}>Resume Builder</h1>
        <Link className={styles.link} to="/personaldetails">Begin Creating</Link>     
    </div>
)}

export default LandingPage;