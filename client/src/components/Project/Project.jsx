import React from 'react';
import ProjectForm from './ProjectForm';
import ListOfProject from './ListOfProject';
import { Container , Form } from 'react-bootstrap';
import Navbar from '../../uikit/Navbar/Navbar';
import styles from './project.module.css';
import { Link } from 'react-router-dom';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List : [],
        };
        this.AddToList = this.AddToList.bind(this);
        this.DeleteFromList = this.DeleteFromList.bind(this);
    }

    saveAndContinue=()=>{
        const obj = { list : this.state.List };
        this.props.projectDataUpdate(obj);
        sessionStorage.setItem('project' , JSON.stringify(obj) );
        console.log(sessionStorage.getItem('project'));
    }

    AddToList(data){
        this.state.List.push(data);
        this.setState({ List : this.state.List })
    }

    DeleteFromList(id){
        const newList = this.state.List.filter(e => e.id !== id );
        this.setState({ List : newList });
    }

    render() { 
        return (
            <div className={styles.container}>
            <div><Navbar array={["Personal Details > Education > Experience > Project"]}/></div>
            <div className={styles.main}>
            <Container>
            <h1>Project Details</h1>
            {console.log(this.state.List)}
            <ProjectForm
            List={this.state.List}
            inputValues={this.inputValues}
            sendData={this.AddToList}
            />
            <ListOfProject
            List={this.state.List}
            deleteProject={this.DeleteFromList}/>
            </Container>
            <Form.Group className='m-4'>
                    <Link className={styles.link} to="/experience">Back</Link>
                    <Link className={styles.link1} to="/finish" onClick={this.saveAndContinue}>Finish</Link>   
            </Form.Group>
            </div>
            </div>
    )}
}
 
export default Project;