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
          college_name : '',
          city_college : '',
          state_college : '',
          field_of_study : '',
          graduating_year : '',
          custom_degree: '',
          degree : "Select A Degree",
          isCustomDegree : false,
          currently_studying : false,
          gpa:''
        };
      }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    saveAndContinue=()=>{
      if( this.state.degree==='Custom Degree' )
      {
        const obj={ college_name : this.state.college_name,city_college : this.state.city_college,state_college : this.state.state_college,field_of_study : this.state.field_of_study, graduating_year : this.state.graduating_year , degree : this.state.custom_degree , currently_studying : this.state.currently_studying , gpa : this.state.gpa}
        this.props.educationDataUpdate(obj);
        sessionStorage.setItem('personal' , JSON.stringify(obj) );
      }
      else{
        const obj={ college_name : this.state.college_name,city_college : this.state.city_college,state_college : this.state.state_college,field_of_study : this.state.field_of_study, graduating_year : this.state.graduating_year , degree : this.state.degree , gpa : this.state.gpa}
        this.props.educationDataUpdate(obj);
        sessionStorage.setItem('education' , JSON.stringify(obj) );
      }
    };

    changeDegree = (event) => {
      this.setState({degree : event.target.className.split('-')[0]});
    }

    changeYear=(i)=>{
      this.setState({graduating_year : i});
    }

    getYear(i){
      return(this.state.year_list[i])
    }

    toggleChange=()=>{
      this.setState({
        currently_studying: !this.state.currently_studying
      })
    }
    
    render() { 
      const picture_sample='data:image/jpeg;base64,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'
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
                  GPA
                  <Form.Control name="gpa" defaultValue={this.state.gpa} onChange={this.handleChange}/>
                </Col>
                {!this.state.currently_studying?<>
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
                </>:<></>}
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
        <div className={styles.img}><img src={picture_sample} alt="sample resume" width='300' height='200' /></div>
        </div>
        </>
    );
    }
}
 
export default Education;