import React from 'react';

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employer : '',
            job_title : '',
            city_job : '',
            city_state : '',
            start_month : '',
            start_year : '',
            end_month : '',
            end_year: '',
            isChecked: false
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
        console.log(name,value)
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

      getMonth=(i)=>{
        const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[i];
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
        <form onSubmit={this.handleSubmit} ref={(el)=> this.myFormRef=el}>
            <h1>Experience</h1>
            <label>
              Employer
              <input name="employer" value={this.state.employer} placeholder="Ex : Oracle" onChange={this.handleChange}></input>
            </label>
            <label>
              Job Title
              <input name="job_title" value={this.state.job_title} placeholder="Ex : FrontEnd Developer" onChange={this.handleChange}></input>
            </label>
            <br/>
            <label>
              City
              <input name="city_job" value={this.state.city_job} onChange={this.handleChange}></input>
            </label>
            <label>
              State
              <input name="city_state" value={this.state.city_state} onChange={this.handleChange}></input>
            </label>
            <br/>
            <label>
              Start Month
              <select name="start_month" value={this.state.start_month} onChange={this.handleChange}>
                <option>--Select--</option>
                <option value={this.getMonth(0)}>{this.getMonth(0)}</option>
                <option value={this.getMonth(1)}>{this.getMonth(1)}</option>
                <option value={this.getMonth(2)}>{this.getMonth(2)}</option>
                <option value={this.getMonth(3)}>{this.getMonth(3)}</option>
                <option value={this.getMonth(4)}>{this.getMonth(4)}</option>
                <option value={this.getMonth(5)}>{this.getMonth(5)}</option>
                <option value={this.getMonth(6)}>{this.getMonth(6)}</option>
                <option value={this.getMonth(7)}>{this.getMonth(7)}</option>
                <option value={this.getMonth(8)}>{this.getMonth(8)}</option>
                <option value={this.getMonth(9)}>{this.getMonth(9)}</option>
                <option value={this.getMonth(10)}>{this.getMonth(10)}</option>
                <option value={this.getMonth(11)}>{this.getMonth(11)}</option>
              </select>
            </label>
            <label>
              Start year
              <select name="start_year" value={this.state.start_year} onChange={this.handleChange}>
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
            </label>
            <label>
              End month
              <select name="end_month" value={this.state.end_month} onChange={this.handleChange} disabled={this.state.isChecked===true}>
                <option>--Select--</option>
                <option value={this.getMonth(0)}>{this.getMonth(0)}</option>
                <option value={this.getMonth(1)}>{this.getMonth(1)}</option>
                <option value={this.getMonth(2)}>{this.getMonth(2)}</option>
                <option value={this.getMonth(3)}>{this.getMonth(3)}</option>
                <option value={this.getMonth(4)}>{this.getMonth(4)}</option>
                <option value={this.getMonth(5)}>{this.getMonth(5)}</option>
                <option value={this.getMonth(6)}>{this.getMonth(6)}</option>
                <option value={this.getMonth(7)}>{this.getMonth(7)}</option>
                <option value={this.getMonth(8)}>{this.getMonth(8)}</option>
                <option value={this.getMonth(9)}>{this.getMonth(9)}</option>
                <option value={this.getMonth(10)}>{this.getMonth(10)}</option>
                <option value={this.getMonth(11)}>{this.getMonth(11)}</option>
              </select>
            </label>
            <label>
              End Year            
              <select name="end_year" value={this.state.end_year} onChange={this.handleChange} disabled={this.state.isChecked===true}>
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
              </label>
                  <p>
                    <input type="checkbox" name="current_study_check" id="group" checked={this.state.isChecked} onChange={this.toggleChange}/>
                    <label htmlFor="group"> 
                        currently studying
                  </label>
                  </p>
              <br/>
            <input type="reset" value="Reset" onClick={this.handleReset}/>
            <input type="submit" value="Submit" />  
        </form>
    )}
}
 
export default Experience;