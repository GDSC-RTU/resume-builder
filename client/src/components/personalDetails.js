import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName:'',
        address: '',
        city:'',
        country:'',
        zipcode:'',
        dob:'',
        email:'',
        phoneNo:''
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
    }
  
    handleSubmit(event) {
      console.log(this.state);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
          <h1>Personal Details</h1>
          <p>
          <label>
            First Name:
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Address
            <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            City:
            <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
          </label>
          <label>
            Country:
            {/* <select id="dropdown" onClick={this.countrySelect}/> */}
            <input type="text" name="country" value={this.state.country} onChange={this.handleChange} />
            </label>
          <br/>
          <label>
            Zipcode:
            <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Date of Birth:
            <input type="date" name="dob" value={this.state.dob} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Email ID:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
            <label>
            Phone Number:
            <input type="tel" name="phoneNo" pattern="[+]{1}[0-9]{2}-[0-9]{10}" value={this.state.phoneNo} onChange={this.handleChange} />
            </label>
          </p>
          <input type="reset" value="Reset" onClick={this.handleReset}/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default NameForm;