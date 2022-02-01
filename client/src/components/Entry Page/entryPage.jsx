import React, { Component } from 'react';
import { Route, Routes , BrowserRouter } from 'react-router-dom';
import Education from '../Education/education';
import Experience from '../Experience/experience'
import LandingPage from '../Landing Page/landingPage';
import PersonDetails from '../Personal Details/personalDetails';
import Project from '../Project/Project';

class EntryPage extends Component {
    state = { 
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
        graduating_year : '2022',
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
        const { firstName, lastName, email, address, dob , country , phoneNo , city, zip ,college_name , city_college, state_college, degree, field_of_study, graduating_year, custom_degree , isChecked} = this.state;
        const inputValues = {  firstName, lastName, email, address, dob , country , phoneNo , city, zip ,college_name , city_college, state_college, degree, field_of_study, graduating_year, custom_degree , isChecked}; 
       
        return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<LandingPage/>}></Route>
                <Route path="/personaldetails" exact element={<PersonDetails handleChange = {this.handleChange} inputValues={inputValues}/>}/>
                <Route path="/education" exact element={<Education handleChange = {this.handleChange} inputValues={inputValues}/>}/>
                <Route path="/experience" exact element={<Experience/>} handleChange = {this.handleChange} inputValues={inputValues}/>
                <Route path="/project" exact element={<Project handleChange = {this.handleChange} inputValues={inputValues}/>}/>
            </Routes>
        </BrowserRouter>
        );
    }
}
 
export default EntryPage;