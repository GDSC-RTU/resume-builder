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
        const picture_sample='data:image/png;base64,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';
        return (
            <>
            <div><Navbar array={["Personal Details >"," Education >"," Experience >"," Project >"]}/></div>
            <div className={styles.container}>
            <div className={styles.main}>
            <Container>
            <h1>Project Details</h1>
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
            <div className={styles.img}><img src={picture_sample} alt="sample resume" width='200' height='200' /></div>
            </div>
            </>
    )}
}
 
export default Project;