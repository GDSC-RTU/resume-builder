import React from 'react';
import { Col ,Row , Form, Button } from 'react-bootstrap';
import styles from './personaldetails.module.css';
import Navbar from '../../uikit/Navbar/Navbar';
import { Link } from 'react-router-dom';

class PersonDetails extends React.Component {
    constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      address:'',
      city:'',
      country:'', 
      zip:'',
      dob:'',
      phoneNo:'',
      email:'',
      description:''
    };}

    saveAndContinue = () => {
      const obj={ firstName : this.state.firstName, lastName : this.state.lastName, address : this.state.address, city : this.state.city,country : this.state.country,zip : this.state.zip,dob : this.state.dob,phoneNo : this.state.phoneNo,email : this.state.email , description : this.state.description }
      this.props.personalDataUpdate(obj); 
      sessionStorage.setItem('personal' , JSON.stringify(obj) );
    };

    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
    }

    render() {

      const picture_sample='https://thumbs.dreamstime.com/b/personal-info-icon-vector-illustration-isolated-flat-cartoon-line-outline-design-user-profile-card-details-symbol-style-my-106255173.jpg'
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
                  <Form.Control type="text" name="lastName" defaultValue={this.state.lastName} required onChange={this.handleChange} />
                </Col>
              </Row>
            </Form.Group>           
            <Form.Group className="p-3">
              Address
              <Form.Control type="text" name="address" defaultValue={this.state.address} required onChange={this.handleChange} />
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
            <Form.Group className="p-3">
              <Row>
                <Col>
                  About You
                  <div className={styles.description}>
                    <textarea className="form-control" type="text" name="description" value={this.state.description} placeholder="Write something about yourself" onChange={this.handleChange} />
                  </div>
                </Col>
              </Row>
            </Form.Group>
          
          <Form.Group className='p-3'>
            { (this.state.firstName===''||this.state.lastName===''||this.state.address===''||this.state.city===''||this.state.country===''|| this.state.zip===''||this.state.dob===''||this.state.phoneNo===''||this.state.email===''||this.state.description==='')?
              <Button onClick={()=>alert('Input field cannot be empty!')}>Save and Continue</Button>
              :
              <Link className={styles.link} to="/education" onClick={this.saveAndContinue}>Save and Continue</Link>}
          </Form.Group>
          </Form>
          
          </div>
          <div className={styles.img}><img src={picture_sample} alt="sample resume" width='400' height='400' /></div>
        </div>
        </>
      );
    }
  }

export default PersonDetails;