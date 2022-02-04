import React from 'react';
import { Row , Col, Container, Form, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navbar from '../../uikit/Navbar/Navbar';
import styles from './education.module.css';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          year_list : [],
          college_name : 'MSRIT',
          city_college : 'Bangalore',
          state_college : 'Karnataka',
          field_of_study : 'ISE',
          graduating_year : '2022',
          custom_degree: 'B.Tech',
          degree : "Select A Degree",
          isCustomDegree : false,
          currently_studying : false
        };
      }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    saveAndContinue=()=>{
      if( this.state.degree==='Custom Degree' )
      {
        const obj={ college_name : this.state.college_name,city_college : this.state.city_college,state_college : this.state.state_college,field_of_study : this.state.field_of_study, graduating_year : this.state.graduating_year , degree : this.state.custom_degree , currently_studying : this.state.currently_studying}
        this.props.educationDataUpdate(obj);
        sessionStorage.setItem('personal' , JSON.stringify(obj) );
      }
      else{
        const obj={ college_name : this.state.college_name,city_college : this.state.city_college,state_college : this.state.state_college,field_of_study : this.state.field_of_study, graduating_year : this.state.graduating_year , degree : this.state.degree}
        this.props.educationDataUpdate(obj);
        sessionStorage.setItem('education' , JSON.stringify(obj) );
      }
    };

    changeDegree = (event) => {
      this.setState({degree : event.target.className.split('-')[0]});
      console.log(this.state.degree)
    }

    changeYear=(i)=>{
      this.setState({graduating_year : i});
    }

    getYear(i){
      return(this.state.year_list[i])
    }
    
    render() { 
      const d = new Date();
      let year = d.getFullYear();

      for(let i=0;i<50;i++)
        this.state.year_list.push(year-i);
    
    return ( 
      <>
      <div><Navbar array={["Personal Details >"," Education >"]}/></div>
      <div className={styles.container}>
      <div className={styles.main}>
      <Container>
        <Form>
            <h1>Education</h1>
            <Form.Group className="p-3">
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
            <Form.Group className="p-3">
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
                    <Dropdown.Menu name="degree" defaultValue={this.state.degree}>
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
            <Form.Group className="p-3">
              <Row>
                <Col>
                  Field of Study
                  <Form.Control type='text' name="field_of_study" defaultValue={this.state.field_of_study} onChange={this.handleChange}/>
                </Col>
                <Col>
                Graduating Year
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.graduating_year}
                  </Dropdown.Toggle>
                <Dropdown.Menu className="graduating_year" disabled={this.state.isCheckedDegree===true}>
                  <Dropdown.Item defaultValue="">--Select--</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(0))}>{this.getYear(0)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(1))}>{this.getYear(1)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(2))}>{this.getYear(2)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(3))}>{this.getYear(3)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(4))}>{this.getYear(4)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(5))}>{this.getYear(5)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(6))}>{this.getYear(6)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(7))}>{this.getYear(7)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(8))}>{this.getYear(8)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(9))}>{this.getYear(9)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(10))}>{this.getYear(10)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(11))}>{this.getYear(11)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(12))}>{this.getYear(12)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(13))}>{this.getYear(13)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(14))}>{this.getYear(14)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(15))}>{this.getYear(15)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(16))}>{this.getYear(16)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(17))}>{this.getYear(17)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(18))}>{this.getYear(18)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(19))}>{this.getYear(19)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(20))}>{this.getYear(20)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(21))}>{this.getYear(21)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(22))}>{this.getYear(22)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(23))}>{this.getYear(23)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(24))}>{this.getYear(24)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(25))}>{this.getYear(25)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(26))}>{this.getYear(26)}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.changeYear(this.getYear(27))}>{this.getYear(27)}</Dropdown.Item>            
                </Dropdown.Menu>
                </Dropdown>
                </Col>
                <Col>
                  <Form.Check type='checkbox' id={`default-checkbox`} value={this.state.currently_studying} label={`currently studying`} onClick={()=>this.toggleChange()}/>
                </Col>
                </Row>
              </Form.Group>
            <Form.Group className='m-5'>
              <Link className={styles.link} to="/personaldetails">Back</Link>
              <Link className={styles.link1} to="/experience" onClick={this.saveAndContinue}>Save and Continue</Link>   
            </Form.Group>
        </Form>
        </Container>
        </div>
        </div>
        </>
    );
    }
}
 
export default Education;