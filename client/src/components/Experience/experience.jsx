import React from 'react';
import { Col, Form, Row , Container, Dropdown , Button } from 'react-bootstrap';
import styles from './experience.module.css';
import Navbar from '../../uikit/Navbar/Navbar';
import { Link } from 'react-router-dom';

class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          employer : 'Oracle',
          job_title : 'Frontend Intern',
          city_job : 'Bangalore',
          city_state : 'Karnataka',
          start_month : 'January',
          start_year : '2021',
          end_month : 'February',
          end_year: '2022',
          isCheckedExperience: false,
          exp_description:''
        };
      }

      saveAndContinue=()=>{
          const obj={ employer : this.state.employer,job_title : this.state.job_title,city_job : this.state.city_job,city_state : this.state.city_state,start_month : this.state.start_month,start_year : this.state.start_year,end_month : this.state.end_month,end_year: this.state.end_year,isCheckedExperience : this.state.isCheckedExperience , exp_description : this.state.exp_description}
          this.props.experienceDataUpdate(obj);
          sessionStorage.setItem('experience' , JSON.stringify(obj) );
      }
      getMonth=(i)=>{
        const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[i];
      }

      getYear(i){
        const d = new Date();
        let year = d.getFullYear();
      
        return(year+i)
      }

      handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
      }

      changeFunction(i){
        this.setState({start_month : i});
      }

      changeFunction1(i){
        this.setState({start_year : i});
      }

      changeFunction2(i){
        this.setState({end_month : i});
      }

      changeFunction3(i){
        this.setState({end_year : i});
      }

      toggleChange=()=>{
        this.setState({
          isChecked: !this.state.isChecked
        })
      }

    render() { 

      const picture_sample='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQiF_UyoGFE_r8DGIhomQZ32vgQldD5gtYlw&usqp=CAU'

      return (
      <>
      <div><Navbar array={["Personal Details >"," Education >"," Experience >"]}/></div>
      <div className={styles.container}>
      <div className={styles.main}>
      <Container>
        <Form onSubmit={this.handleSubmit} ref={(el)=> this.myFormRef=el}>
            <h1>Experience</h1>
            <Form.Group className="p-3">
              <Row>
              <Col>
              Employer
              <Form.Control name="employer" defaultValue={this.state.employer} placeholder="Ex : Oracle" onChange={this.handleChange}></Form.Control>
              </Col>
              <Col>
              Job Title
              <Form.Control name="job_title" defaultValue={this.state.job_title} placeholder="Ex : FrontEnd Developer" onChange={this.handleChange}></Form.Control>
              </Col>
              </Row>
            </Form.Group>
            <Form.Group className="p-3">
            <Row>
              <Col>
              City
              <Form.Control name="city_job" defaultValue={this.state.city_job} onChange={this.handleChange}></Form.Control>
              </Col>
              <Col>
              State
              <Form.Control name="city_state" defaultValue={this.state.city_state} onChange={this.handleChange}></Form.Control>
              </Col>
            </Row>
            </Form.Group>
            <Form.Group className="p-3">
            <Row>
              <Col>
            Start Month
            <Dropdown>
                  <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.start_month}
                  </Dropdown.Toggle> 
              <Dropdown.Menu name="start_month" defaultValue={this.state.start_month}>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(0))}>{this.getMonth(0)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(1))}>{this.getMonth(1)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(2))}>{this.getMonth(2)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(3))}>{this.getMonth(3)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(4))}>{this.getMonth(4)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(5))}>{this.getMonth(5)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(6))}>{this.getMonth(6)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(7))}>{this.getMonth(7)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(8))}>{this.getMonth(8)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(9))}>{this.getMonth(9)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(10))}>{this.getMonth(10)}</Dropdown.Item>
                <Dropdown.Item className="start_month" onClick={()=>this.changeFunction(this.getMonth(11))}>{this.getMonth(11)}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
              </Col>
              <Col>
              Start year
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.start_year}
              </Dropdown.Toggle>
              <Dropdown.Menu name="start_year" defaultValue={this.state.start_year}>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(0))}>{this.getYear(0)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-1))}>{this.getYear(-1)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-2))}>{this.getYear(-2)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-3))}>{this.getYear(-3)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-4))}>{this.getYear(-4)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-5))}>{this.getYear(-5)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-6))}>{this.getYear(-6)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-7))}>{this.getYear(-7)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-8))}>{this.getYear(-8)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-9))}>{this.getYear(-9)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-10))}>{this.getYear(-10)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-11))}>{this.getYear(-11)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-12))}>{this.getYear(-12)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-13))}>{this.getYear(-13)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-14))}>{this.getYear(-14)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-15))}>{this.getYear(-15)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-16))}>{this.getYear(-16)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-17))}>{this.getYear(-17)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-18))}>{this.getYear(-18)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-19))}>{this.getYear(-19)}</Dropdown.Item>
                  <Dropdown.Item className="start_year" onClick={()=>this.changeFunction1(this.getYear(-20))}>{this.getYear(-20)}</Dropdown.Item>                  
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              {!this.state.isChecked?<>
              <Col>
              End month
              <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.end_month}
                </Dropdown.Toggle>
                <Dropdown.Menu name="start_month" defaultValue={this.state.start_month}>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(0))}>{this.getMonth(0)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(1))}>{this.getMonth(1)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(2))}>{this.getMonth(2)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(3))}>{this.getMonth(3)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(4))}>{this.getMonth(4)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(5))}>{this.getMonth(5)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(6))}>{this.getMonth(6)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(7))}>{this.getMonth(7)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(8))}>{this.getMonth(8)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(9))}>{this.getMonth(9)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(10))}>{this.getMonth(10)}</Dropdown.Item>
                  <Dropdown.Item className="end_month" onClick={()=>this.changeFunction2(this.getMonth(11))}>{this.getMonth(11)}</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              </Col>
              <Col>
            End Year        
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    {this.state.end_year}
                </Dropdown.Toggle>    
                <Dropdown.Menu name="end_year" defaultValue={this.state.end_year}>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(0))}>{this.getYear(0)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-1))}>{this.getYear(-1)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-2))}>{this.getYear(-2)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-3))}>{this.getYear(-3)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-4))}>{this.getYear(-4)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-5))}>{this.getYear(-5)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-6))}>{this.getYear(-6)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-7))}>{this.getYear(-7)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-8))}>{this.getYear(-8)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-9))}>{this.getYear(-9)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-10))}>{this.getYear(-10)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-11))}>{this.getYear(-11)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-12))}>{this.getYear(-12)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-13))}>{this.getYear(-13)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-14))}>{this.getYear(-14)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-15))}>{this.getYear(-15)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-16))}>{this.getYear(-16)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-17))}>{this.getYear(-17)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-18))}>{this.getYear(-18)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-19))}>{this.getYear(-19)}</Dropdown.Item>
                  <Dropdown.Item className="end_year" onClick={()=>this.changeFunction3(this.getYear(-20))}>{this.getYear(-20)}</Dropdown.Item>                  
                </Dropdown.Menu>
              </Dropdown>
              </Col></>:<></>}
            <Form.Group className="p-3">
              <Row>
                <Col>
                  Experience Description
                  <div className={styles.description}>
                    <textarea className="form-control" type="text" name="exp_description" value={this.state.exp_description} placeholder="Write something about your experience at the job" onChange={this.handleChange} />
                  </div>
                </Col>
              </Row>
            </Form.Group>
            </Row>
              </Form.Group>
                  <div className="p-3">
                  <Form.Check type='checkbox' id={`default-checkbox`} value={this.props.isChecked} label={`currently working`} onClick={()=>this.toggleChange()}/>
                      <Form.Group htmlFor="group"> 
                  </Form.Group>
                  </div>
            <Form.Group className='m-5'>
              <Link className={styles.link} to="/education">Back</Link>
              &emsp;
              { (this.state.employer===''||this.state.job_title===''||this.state.city_job===''||this.state.city_state===''||this.state.start_month===''|| this.state.start_year===''||this.state.exp_description==='')?
                <Button onClick={()=>alert('Input field cannot be empty!')}>Save and Continue</Button>
                :
              <Link className={styles.link1} to="/project" onClick={this.saveAndContinue}>Save and Continue</Link>} 
            </Form.Group>  
        </Form>
        </Container>
        </div>
        <div className={styles.img}><img src={picture_sample} alt="sample resume" width='200' height='200' /></div>
        </div>
        </>
    )}
}
 
export default Experience;