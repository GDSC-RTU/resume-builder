import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import e from 'cors';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          college_name : '',
          city_college : '',
          state_college : '',
          degree : '',
          field_of_study : '',
          graduating_year : '',
          custom_degree: '',
          isChecked : false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleChange = this.toggleChange.bind(this);
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
        console.log("Reset!");
        window.location.reload(false);
      }
    
      handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }

      getYear(i){
        const d = new Date();
        let year = d.getFullYear();
        let year_list=[];

        for(let i=0;i<10;i++)
          year_list.push(year+i);

        return(year_list[i])
      }

      toggleChange(){
        this.setState({
          isChecked: !this.state.isChecked
        })
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
                <div>
                  <label>Select Degree</label>
                    <div>
                      <select name="degree" value={this.state.degree} onChange={this.handleChange}>
                      <option value="">Select a degree</option>
                      <option value="High School Diploma">High School Diploma</option>
                      <option value="GED">GED</option>
                      <option value="Associate of Arts" >Associate of Arts</option>
                      <option value="Associate of Science">Associate of Science</option>
                      <option value="Associate of Applied Science">Associate of Applied Science</option>
                      <option value="Bachelor of Arts">Bachelor of Arts</option>
                      <option value="Bachelor of Science">Bachelor of Science</option>
                      <option value="BBA">BBA</option>
                      <option value="Master of Arts">Master of Arts</option>
                      <option value="Master of Science">Master of Science</option>
                      <option value="MBA">MBA</option>
                      <option value="J.D.">J.D.</option>
                      <option value="M.D.">M.D.</option>
                      <option value="Ph.D.">Ph.D.</option>
                      <option value="Custom Degree" onSelect={this.createNewInput}>Custom Degree</option>
                      </select>
                    </div>
                </div>
            </label>
            <label>
              <input type="text" name="custom_degree" onChange={this.handleChange} disabled={this.state.degree!=="Custom Degree"}/>
            </label>
            <br/>
            <label>
                Field of Study
                <input type='text' name="field_of_study" value={this.state.field_of_study} onChange={this.handleChange}/>
            </label>
            <label>
                Graduating Year
                <select className="graduating_year" value={this.state.value} onChange={this.handleChange} disabled={this.state.isChecked===true}>
                  <option value="">--Select--</option>
                  <option value={this.getYear(0)}>{this.getYear(0)}</option>
                  <option value={this.getYear(1)}>{this.getYear(1)}</option>
                  <option value={this.getYear(2)}>{this.getYear(2)}</option>
                  <option value={this.getYear(3)}>{this.getYear(3)}</option>
                  <option value={this.getYear(4)}>{this.getYear(4)}</option>
                  <option value={this.getYear(5)}>{this.getYear(5)}</option>
                  <option value={this.getYear(6)}>{this.getYear(6)}</option>
                  <option value={this.getYear(7)}>{this.getYear(7)}</option>
                  <option value={this.getYear(8)}>{this.getYear(8)}</option>
                  <option value={this.getYear(9)}>{this.getYear(9)}</option>
                </select>
                <p>
                    <input type="checkbox" name="current_study_check" id="group" checked={this.state.isChecked} onChange={this.toggleChange}/>
                    <label htmlFor="group">
                        currently studying
                    </label>
                </p>
            </label>
            <br/>
            <input type="reset" value="Reset" onClick={this.handleReset}/>
            <input type="submit" value="Submit" />      
        </form>
    );
    }
}
 
export default Education;