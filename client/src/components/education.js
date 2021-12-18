import React, { Component } from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          college_name : '',
          city_college : '',
          state_college : '',
          degree : '',
          field_of_study : '',
          graduating_year : ''
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
  
      handleReset(event){
        //event.target.reset();
        console.log("Reset!");
        //this.myFormRef.reset();
        window.location.reload(false);
      }
    
      handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }

    render() { 
    return ( 
        <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
            <h1>Experience</h1>
            <label>
                College Name
                <input type='text' name="college_name" value={this.state.college_name} onChange={this.handleChange}/>
            </label>
            <label>
                City
                <input type='text' name="city_college" value={this.state.city_college} onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                State
                <input type='text' name="state_college" value={this.state.state_college} onChange={this.handleChange}/>
            </label>
            <label>
                Select Degree
                <input type='text' name="degree" value={this.state.degree} onChange={this.handleChange}/>
            </label>
            <br/>
            <label>
                Field of Study
                <input type='text' name="field_of_study" value={this.state.field_of_study} onChange={this.handleChange}/>
            </label>
            <label>
                Graduating Year
                <input type='text' name="graduating_year" value={this.state.graduating_year} onChange={this.handleChange}/>
            </label>
            <br/>
            <input type="reset" value="Reset" onClick={this.handleReset}/>
            <input type="submit" value="Submit" />      
        </form>
    );
    }
}
 
export default Education;