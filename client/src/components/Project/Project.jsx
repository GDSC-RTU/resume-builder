import React from 'react';
import ProjectForm from './ProjectForm';
import ListOfProject from './ListOfProject';
import styles from './project.module.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            List : []
        };
        this.AddToList = this.AddToList.bind(this);
        this.DeleteFromList = this.DeleteFromList.bind(this);
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
        <div className={styles.projectComponent}>
            <h1>Project Details</h1>
            {console.log(this.state.List)}
            <ProjectForm
            List={this.List}
            sendData={this.AddToList}
            />
            <ListOfProject
            List={this.state.List}
            deleteProject={this.DeleteFromList}/>
        </div>
    )}
}
 
export default Project;