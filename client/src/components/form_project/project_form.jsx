import React from 'react';

class ProjectForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            project_name : '',
            link : '',
            description : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    handleSubmit(event) {
        event.preventDefaut();
        const regex=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        if( this.state.link.match(regex) )
        { 
            const payload = { project_name : this.state.project_name , link : this.state.link , description : this.state.description }
            this.props.AddToList(payload);
        }
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
                <input type="text" name="link" value={this.state.link} onChange={this.handleChange}></input>
                </span>
                <br/>
                <span>
                Description : 
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}></input>
                </span>
                <br/>
                <button type="reset" value="Reset" onClick={this.handleReset}>Reset</button>
                <button type="submit" value="Submit" onClick={this.handleSubmit}>Submit</button>
            </form> 
        </div>
    )}
}
 
export default ProjectForm;