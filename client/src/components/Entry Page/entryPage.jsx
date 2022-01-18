import React, { Component } from 'react';
import Navbar from '../../uikit/Navbar/Navbar';
import Education from '../Education/education';
import Experience from '../Experience/experience'
import PersonDetails from '../Personal Details/personalDetails';
import Project from '../Project/Project';

class EntryPage extends Component {
    state = { 
        step:1,
        firstName:'',
        lastName:'', 
        email:'', 
        address:'', 
        dob:'',
        phoneNo:'',
        city:'', 
        country:'', 
        zip:'',
        college_name : '',
        city_college : '',
        state_college : '',
        degree : '',
        field_of_study : '',
        graduating_year : '',
        custom_degree: '',
        isChecked : false
    }
        
    nextStep = () => {
        const { step } = this.state;
        this.setState({
        step : step + 1
        })
    }
    
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    } 

    render() { 
        const { step, firstName, lastName, email, address, dob , country , phoneNo , city, zip ,college_name , city_college, state_college, degree, field_of_study, graduating_year, custom_degree , isChecked} = this.state;
        const inputValues = {  firstName, lastName, email, address, dob , country , phoneNo , city, zip ,college_name , city_college, state_college, degree, field_of_study, graduating_year, custom_degree , isChecked};
        
        switch(step){
            case 1: 
                    return <div>
                    <Navbar
                    array={["Personal Details > "]}/>
                    <PersonDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    /></div>
            case 2:
                    return <Education
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
            case 3:
                    return <Experience
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
            case 4:
                    return <Project
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
            default:
                    return <div>404 Page not Found</div>
        }
    }
}
 
export default EntryPage;