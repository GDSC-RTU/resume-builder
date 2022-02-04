import { Template } from "./template";
import React, { Component, useRef } from 'react';
import ReactToPrint from 'react-to-print';

class Srtresume extends Component{
    render(){
	return (
	<div>
    <ReactToPrint
            content={() => this.componentRef}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
    />
	<Template ref={(response) => (this.componentRef = response)} personalDetailsValues={this.props.personalDetailsValues} educationDetailsValues={this.props.educationDetailsValues} experienceDetailsValues={this.props.experienceDetailsValues} projectDetailsValues={this.props.projectDetailsValues}/>
	</div>
    );}
}
 
export default Srtresume;