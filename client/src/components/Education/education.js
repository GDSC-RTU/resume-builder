import React from 'react';
import { Button, Row , Col, Container, Form, Dropdown } from 'react-bootstrap';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          degree : "Select A Degree",
          isCustomDegree : false,
          isChecked : false
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

    changeDegree=(event)=>{
      this.setState({degree : event.target.className.split('-')[0]});
      console.log(this.state.degree)
    }
    
    render() { 
    return ( 
      <Container>
        <Form onSubmit={this.handleSubmit} ref={(el) => this.myFormRef = el}>
            <h1>Experience</h1>
            <Form.Group>
              <Row>
                <Col>
                  College Name
                  <Form.Control type='text' name="college_name" defaultValue={this.state.college_name} onChange={this.handleChange}/>
                </Col>
                <Col>
                  City
                  <Form.Control type='text' name="city_college" defaultValue={this.state.city_college} onChange={this.handleChange}/>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Row>
                <Col>
                  State
                  <Form.Control type='text' name="state_college" defaultValue={this.state.state_college} onChange={this.handleChange}/>
                </Col>
                <Col>
                  Maximum Education
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                      {this.state.degree}
                    </Dropdown.Toggle>  
                    <Dropdown.Menu name="degree" defaultValue={this.state.degree} onChange={this.handleChange}>
                      <Dropdown.Item  onClick={this.changeDegree} className="High School Diploma-">High School Diploma</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="GED-">GED</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Associate of Arts-" >Associate of Arts</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Associate of Science-">Associate of Science</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Associate of Applied Science-">Associate of Applied Science</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Bachelor of Arts-">Bachelor of Arts</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Bachelor of Science-">Bachelor of Science</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="BBA-">BBA</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Master of Arts-">Master of Arts</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Master of Science-">Master of Science</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="MBA-">MBA</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="J.D.-">J.D.</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="M.D.-">M.D.</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Ph.D.-">Ph.D.</Dropdown.Item>
                      <Dropdown.Item  onClick={this.changeDegree} className="Custom Degree-">Custom Degree</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col>
                  Enter Custom Degree
                  <Form.Control type="text" name="custom_degree" disabled={ (this.state.degree!=='Custom Degree') } onChange={this.handleChange}/>
                </Col>
              </Row>
            </Form.Group>
            <label>
                Field of Study
                <Form.Control type='text' name="field_of_study" defaultValue={this.state.field_of_study} onChange={this.handleChange}/>
            </label>
            <label>
                Graduating Year
                <select className="graduating_year" defaultValue={this.state.value} onChange={this.handleChange} disabled={this.state.isChecked===true}>
                  <option defaultValue="">--Select--</option>
                  <option defaultValue={this.getYear(0)}>{this.getYear(0)}</option>
                  <option defaultValue={this.getYear(1)}>{this.getYear(1)}</option>
                  <option defaultValue={this.getYear(2)}>{this.getYear(2)}</option>
                  <option defaultValue={this.getYear(3)}>{this.getYear(3)}</option>
                  <option defaultValue={this.getYear(4)}>{this.getYear(4)}</option>
                  <option defaultValue={this.getYear(5)}>{this.getYear(5)}</option>
                  <option defaultValue={this.getYear(6)}>{this.getYear(6)}</option>
                  <option defaultValue={this.getYear(7)}>{this.getYear(7)}</option>
                  <option defaultValue={this.getYear(8)}>{this.getYear(8)}</option>
                  <option defaultValue={this.getYear(9)}>{this.getYear(9)}</option>
                </select>
                <p>
                    <Form.Control type="checkbox" name="current_study_check" id="group" checked={this.state.isChecked} onChange={this.toggleChange}/>
                    <label htmlFor="group">
                        currently studying
                    </label>
                </p>
            </label>
            <Button variant="dark" onClick={this.back}>Back</Button>
            <Button variant="light" onClick={this.saveAndContinue}>Save and Continue</Button>   
        </Form>
        </Container>
    );
    }
}
 
export default Education;