import { Template } from "./template";
import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Navbar from "../../uikit/Navbar/Navbar";

class Srtresume extends Component{
    render(){
	return (
	<div>
    <Navbar array={[""]}/>
    <ReactToPrint
            documentTitle={`Resume_${JSON.parse(sessionStorage.getItem('personal')).firstName}`}
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
    />
	<Template ref={(response) => (this.componentRef = response)} personalDetailsValues={this.props.personalDetailsValues} educationDetailsValues={this.props.educationDetailsValues} experienceDetailsValues={this.props.experienceDetailsValues} projectDetailsValues={this.props.projectDetailsValues}/>
	</div>
    );}
}
 
export default Srtresume;