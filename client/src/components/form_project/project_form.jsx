import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            project_name : '',
            link_url : '',
            description : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
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
  
    handleReset(){
        console.log("Reset!");
        window.location.reload(false);
    }
    
    handleAdd(event) {
        event.preventDefaut();
        const payload = { project_name : this.state.project_name , link_url : this.state.link_url , description : this.state.description }
        this.props.AddToList(payload);
    }

    render() { 
        return (
        <div>
            <form>
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
                <button type="reset"onClick={this.handleReset}>Reset</button>
                <button type="Add" onClick={this.handleAdd}>Add</button>
            </form> 
        </div>
    )}
}
 
export default ProjectForm;