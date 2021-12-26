import React from 'react';
import ProjectForm from './form_project/project_form';

class Project extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    List : []
    }}

    AddToList(data){
        console.log(data);
    }

    render() { 
        return (
        <div>
            <h1>Project Details</h1>
            <button onClick={this.AddProject}>Add New Project</button>
            <br/>
            <ProjectForm
            List={this.List}
            sendData={this.AddToList}
            />
        </div>
    )}
}
 
export default Project;