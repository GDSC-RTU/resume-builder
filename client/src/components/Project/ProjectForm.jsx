import React from 'react';
import {v4 as uuid} from 'uuid';
import { Button , Form, Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './project.module.css';

class ProjectForm extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
            project_name : '',
            link_url : '',
            description : ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
  
        this.setState({
          [name]:value
        })
    }
    
    handleAdd() {
        if( this.state.project_name!=="" && this.state.link_url!=="" && this.state.description!=="" ){
        const payload = { id : uuid() , project_name : this.state.project_name , link_url : this.state.link_url , description : this.state.description }
        this.props.sendData(payload);
        this.setState({ project_name : '' });
        this.setState({ link_url : '' });
        this.setState({ description : '' });}
    }

    render() { 
        return (
            <Form>
                <Form.Group>
                    <Row>
                        <Col>
                    Project Name : 
                    <Form.Control type="text" name="project_name" value={this.state.project_name} onChange={this.handleChange}></Form.Control>
                        </Col>
                        <Col>
                    Link
                    <Form.Control type="text" name="link_url" value={this.state.link_url} onChange={this.handleChange}></Form.Control>
                    </Col>
                    </Row>
                    Description : 
                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleChange}></Form.Control>
                </Form.Group>
                <Button className='m-3' onClick={this.handleAdd}>Add</Button> 
            </Form> 
    )}
}
 
export default ProjectForm;