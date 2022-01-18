import styles from './breadcrumb.module.css';

function BreadCrumb( {array} ){
    return(        
        array.map( (e) => <div key={e} className={styles.breadcrumb}>{e}</div>)
    );
}

export default BreadCrumb;