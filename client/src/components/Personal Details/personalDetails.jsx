import React from 'react';
import { Col ,Row , Form } from 'react-bootstrap';
import styles from './personaldetails.module.css';
import Navbar from '../../uikit/Navbar/Navbar';
import { Link } from 'react-router-dom';

class PersonDetails extends React.Component {
    constructor(props){
    super(props);
    this.state={
      firstName:'FirstName',
      lastName:'LastName',
      address:'Generic Address',
      city:'City',
      country:'Country', 
      zip:'123123',
      dob:'01-01-2001',
      phoneNo:'1231231231',
      email:'123@email.com'
    };}

    saveAndContinue = () => {
      const obj={ firstName : this.state.firstName, lastName : this.state.lastName, address : this.state.address, city : this.state.city,country : this.state.country,zip : this.state.zip,dob : this.state.dob,phoneNo : this.state.phoneNo,email : this.state.email}
      this.props.personalDataUpdate(obj); 
      sessionStorage.setItem('personal' , JSON.stringify(obj) );    
    };

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

    render() {

      return (
        <>
          <div><Navbar array={["Personal Details > "]}/></div>
          <div className={styles.container}>        
          <div className={styles.main}>
          <Form>
            <div className="m-3 p-3"><h1>Please enter your details</h1>
            Employers will use this information to contact you.</div>
            <Form.Group className="p-3" controlId='firstName'>
              <Row >
                <Col>
                  First Name:
                  <Form.Control type="text" name="firstName" defaultValue={this.state.firstName} required onChange={this.handleChange} />
                </Col>
                <Col>
                  Last Name:
                  <Form.Control type="text" name="lastName" defaultValue={this.state.lastName} onChange={this.handleChange} />
                </Col>
              </Row>
            </Form.Group>           
            <Form.Group className="p-3">
              Address
              <Form.Control type="text" name="address" defaultValue={this.state.address} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group className="p-3">
              <Row>
                <Col>
                  City:
                  <Form.Control type="text" name="city" defaultValue={this.state.city} onChange={this.handleChange} />
                </Col>
                <Col>
                  Zipcode:
                  <Form.Control type="text" name="zip" defaultValue={this.state.zip} onChange={this.handleChange} />
                </Col>
                <Col>
                  Country:
                  <Form.Control type="text" name="country" defaultValue={this.state.country} onChange={this.handleChange} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="p-3">
              <Row>
                <Col>
                  Date of Birth:
                  <Form.Control type="date" name="dob" defaultValue={this.state.dob} onChange={this.handleChange} />
                </Col>
                <Col>
                  Email ID:
                  <Form.Control type="email" name="email" defaultValue={this.state.email} onChange={this.handleChange} />
                </Col>
                <Col>
                  Phone Number:
                  <Form.Control type="tel" name="phoneNo" pattern="[+]{1}[0-9]{2}-[0-9]{10}" placeholder=' Eg +91-834532XXXXX' defaultValue={this.state.phoneNo} onChange={this.handleChange} />
                </Col>
              </Row>
            </Form.Group>
          
          <Form.Group className='p-3'>
            <Link className={styles.link} to="/education" onClick={this.saveAndContinue}>Save and Continue</Link>
          </Form.Group>
          </Form>
          
          </div>
          <div>1213121312131213121312131213121312131213121312131213121312131213121312131213</div>
        </div>
        </>
      );
    }
  }

export default PersonDetails;