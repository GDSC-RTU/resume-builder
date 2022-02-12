import { Button, Form , Col } from "react-bootstrap";
import styles from './project.module.css';

function ListOfProject( { List , deleteProject } ){

    function handleDelete(id){
       deleteProject(id)
    }

    return(
        List.map( (e)=> <div className={styles.project} key={e.id}>
            <Form.Group>
            <Col><span className={styles.span}>Project Name : </span>{e.project_name}</Col>
            <Col><span className={styles.span}>Link : </span>{e.link_url}</Col>
            <Col><span className={styles.span}>Description : </span>{e.description}</Col>
            </Form.Group>
            <Button className="m-3" type="delete" variant="dark" onClick={()=>handleDelete(e.id)}>Delete</Button></div>)
    )
}
export default ListOfProject;