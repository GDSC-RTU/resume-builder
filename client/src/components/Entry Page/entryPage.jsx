import React, { Component } from 'react';
import { Route, Routes , BrowserRouter } from 'react-router-dom';

import Navbar from '../../uikit/Navbar/Navbar';
import Education from '../Education/education';
import Experience from '../Experience/experience'
import PersonDetails from '../Personal Details/personalDetails';
import Project from '../Project/Project';

class EntryPage extends Component {
    state = { 
        // step:1,
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
        
    nextStep = (str) => {
        if(str==='education')
            console.log('123');
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
       
        return(
        <BrowserRouter>
            <Navbar array={["Personal Details > "]}/>
            <Routes>
                <Route path="/personaldetails" exact element={<PersonDetails nextStep={this.nextStep} handleChange = {this.handleChange} inputValues={inputValues}/>}/>
                <Route path="/education" exact element={<Education nextStep={this.nextStep} prevStep={this.prevStep} handleChange = {this.handleChange} inputValues={inputValues}/>}/>
                <Route path="/experience" exact element={<Experience/>} nextStep={this.nextStep}prevStep={this.prevStep} handleChange = {this.handleChange} inputValues={inputValues}/>
                <Route path="/project" exact element={<Project prevStep={this.prevStep} handleChange = {this.handleChange} binputValues={inputValues}/>}/>
            </Routes>
        </BrowserRouter>
        );
    }
}
 
export default EntryPage;