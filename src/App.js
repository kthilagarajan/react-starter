import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Button, InputGroup, Input, Row, Col } from 'reactstrap';
import Todo from './todo';

class App extends Component {
  selectedOngoingTask = {}
  constructor(props) {
    super(props)
    this.state = {
      taskInput: "",
      task_list: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.saveEditedTask = this.saveEditedTask.bind(this);
  }

  handleChange(event) {
    this.setState({ taskInput: event.target.value });
  }

  addTask() {
    let all_tasks = this.state.task_list
    all_tasks.push({
      id: parseInt(Math.random(500)*1000, 0),
      value: this.state.taskInput
    })
    this.setState({ taskInput: "" });
    this.setState({ task_list: all_tasks })
  }

  deleteTask(selectedTask) {
    let all_tasks = this.state.task_list
    all_tasks = all_tasks.filter((taskObj)=>{
      return taskObj.id !== selectedTask.id
    })
    this.setState({ task_list: all_tasks })
    this.setState({ taskInput: "" });
    this.selectedOngoingTask = {}
  }

  editTask(selectedTask) {
    this.setState({ taskInput: selectedTask.value });
    this.selectedOngoingTask = selectedTask
  }

  saveEditedTask(){
    let all_tasks = this.state.task_list
    for(var index in all_tasks){
      if(all_tasks[index].id === this.selectedOngoingTask.id){
        all_tasks[index].value = this.state.taskInput
      }
    }
    this.setState({ task_list: all_tasks })
    this.selectedOngoingTask = {}
    this.setState({ taskInput: "" });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple Todo App in React</h1>
        </header>
        <br />
        <Container>
          <Row>
            <Col md="10">
              <InputGroup>
                <Input value={this.state.taskInput} onChange={this.handleChange} placeholder="Task details" />
              </InputGroup>
            </Col>
            <Col md="2">
            { Object.keys(this.selectedOngoingTask).length === 0 ? (
              <Button color="primary" onClick={this.addTask}>Add</Button>
            ) : (
              <Button color="primary" onClick={this.saveEditedTask}>Save</Button>
            ) }
              
            </Col>
          </Row>
        </Container>
        <br/>
        <Todo tasks={this.state.task_list} deleteClick={this.deleteTask} editClick={this.editTask}/>
      </div>
    );
  }
}

export default App;


