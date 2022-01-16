import React from 'react';
import { Button, Col, Container , Row , Form } from 'react-bootstrap';

class PersonDetails extends React.Component {
    constructor(props){
    super(props);
    this.state={
    };
    }
    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    saveAndContinue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    };

    render() {
      return (
        <Container fluid>
          <Row>
          <Col className='w-75'>
          <Form>
            <div className="m-3 p-3"><h1>Please enter your details</h1>
            Employers will use this information to contact you.</div>
            <Form.Group className="p-3" controlId='firstName'>
              <Row >
                <Col>
                  First Name:
                  <Form.Control type="text" name="firstName" defaultValue={this.props.inputValues.firstName} required onChange={this.props.handleChange} />
                </Col>
                <Col>
                  Last Name:
                  <Form.Control type="text" name="lastName" defaultValue={this.props.inputValues.lastName} onChange={this.props.handleChange} />
                </Col>
              </Row>
            </Form.Group>           
            <Form.Group className="p-3">
              Address
              <Form.Control type="text" name="address" defaultValue={this.props.inputValues.address} onChange={this.props.handleChange} />
            </Form.Group>
            <Form.Group className="p-3">
              <Row>
                <Col>
                  City:
                  <Form.Control type="text" name="city" defaultValue={this.props.inputValues.city} onChange={this.props.handleChange} />
                </Col>
                <Col>
                  Zipcode:
                  <Form.Control type="text" name="zipcode" defaultValue={this.props.inputValues.zipcode} onChange={this.props.handleChange} />
                </Col>
                <Col>
                  Country:
                  <Form.Control type="text" name="country" defaultValue={this.props.inputValues.country} onChange={this.props.handleChange} />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="p-3">
              <Row>
                <Col>
                  Date of Birth:
                  <Form.Control type="date" name="dob" defaultValue={this.props.inputValues.dob} onChange={this.props.handleChange} />
                </Col>
                <Col>
                  Email ID:
                  <Form.Control type="email" name="email" defaultValue={this.props.inputValues.email} onChange={this.props.handleChange} />
                </Col>
                <Col>
                  Phone Number:
                  <Form.Control type="tel" name="phoneNo" pattern="[+]{1}[0-9]{2}-[0-9]{10}" placeholder=' Eg +91-834532XXXXX' defaultValue={this.props.inputValues.phoneNo} onChange={this.props.handleChange} />
                </Col>
              </Row>
            </Form.Group>
          
          <Form.Group className='p-3'>
            <Button variant="light" onClick={this.saveAndContinue}>Save and Continue</Button>
          </Form.Group>

          </Form>
        </Col>
        <Col>
          123
        </Col>
        </Row>
        </Container>
      );
    }
  }

export default PersonDetails;