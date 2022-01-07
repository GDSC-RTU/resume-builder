import React from 'react';
import {v4 as uuid} from 'uuid';

class ProjectForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            project_name : '',
            link_url : '',
            description : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
  
        this.setState({
          [name]:value
        })
    }
    
    handleAdd() {
        if( this.state.project_name!=="" && this.state.link_url!=="" && this.state.description!=="" ){
        const payload = { id : uuid() , project_name : this.state.project_name , link_url : this.state.link_url , description : this.state.description }
        this.props.sendData(payload);
        this.setState({ project_name : '' });
        this.setState({ link_url : '' });
        this.setState({ description : '' });}
    }

    render() { 
        return (
        <div>
            <div>
                <span>
                Project Name : 
                <input type="text" name="project_name" value={this.state.project_name} onChange={this.handleChange}></input>
                </span>
                <span>
                Link
                <input type="text" name="link_url" value={this.state.link_url} onChange={this.handleChange}></input>
                </span>
                <br/>
                <span>
                Description : 
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input>
                </span>
                <br/>
                <button type="Add" onClick={this.handleAdd}>Add</button>
            </div> 
        </div>
    )}
}
 
export default ProjectForm;