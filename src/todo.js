import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Row, Col } from 'reactstrap';

export default class Todo extends Component {
    render() {
        return (
            <Container>
                {this.props.tasks.length === 0 ? "No Tasks found" : ""}
                <ListGroup>
                    {this.props.tasks.map((taskObj, index) => {
                        return (
                            <ListGroupItem key={taskObj.id} >
                                <Row>
                                    <Col md="10" className="text-left">
                                        {taskObj.value} 
                                    </Col>
                                    <Col md="2">
                                        <a onClick={this.props.editClick.bind(this, taskObj)}>Edit
                                        </a> 
                                        {' | '}
                                        <a onClick={this.props.deleteClick.bind(this, taskObj)}>Delete
                                        </a> 
                                    </Col>
                                </Row>
                                
                                
                            </ListGroupItem>
                        )
                    })}

                </ListGroup>
                
                    
            </Container>
        )
    }
}
