import React, { Component } from 'react'; // React default export. component named export 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import Output from './output';
import Count from './Count';
import List from './List';
import Todos from './Todos';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: '',
      todos: [],
      searchWord: ''
    }
  }


  handleIncrement = (type) => {
    const countVal = type === 'inc' ? this.state.count + 1 : this.state.count - 1;
    this.setState({
      count: countVal
    })
  }

  handleChange = (event) => {
    this.setState({
      inputVal: event.target.value
    })
  }

  handleclick = () => {
    // const { todos, inputVal } = this.state;

    console.log('todos', this.state.todos)
    this.state.todos.push({ name: this.state.inputVal, completed: false });

    this.setState({
      todos: this.state.todos,
      inputVal: ''
    })
  }

  handleCheckbox = (event, todo) => {
    const { todos } = this.state;
    console.log('called', event.target.checked, todo);

    const index = todos.findIndex((item) => {
      return item.name == todo.name
    })

    todos[index].completed = event.target.checked;
    this.setState({
      todos: todos
    })
  }

  handleSearch = (event) => {
    this.setState({
      searchWord: event.target.value
    })
  }

  render() {
    const { carsData, count, todos, searchWord } = this.state;
    console.log({ todos, searchWord });

    let filtredTodos = todos;
    if (searchWord) {
      filtredTodos = todos.filter((todo) => {
        return todo.name.includes(searchWord)
      })
    }


    return (
      <div>
        <input type="text" value={this.state.inputVal} onChange={(event) => this.handleChange(event)} />
        <button type="button" onClick={() => this.handleclick()}>add</button>
        <div className="search">
          <input type="text" placeholder="Enter Search key..." onChange={(event) => this.handleSearch(event)} />
        </div>


        <Todos todos={filtredTodos} handleCheckbox={(event, todo) => this.handleCheckbox(event, todo)} />

        {/* {this.state.cars.map((car, index) => {
          return <p className="car" key={index}>{car}</p>
        })} */}

        {/* <List cars={carsData} /> */}

        {/* <Count handleChange={(type) => this.handleIncrement(type)} /> */}
        {/* <Output countvalue={count} name="React class" /> */}
      </div>

    )
  }

}

export default App;

// hey react training ----> hey React Training ----> camelCase

// state: data management
// props: data transfer from one component to another component (Parent to child)
// calling parent function: Passing data from Child to parent






// React component based;
// 1.Class components;
// 2.Functional components;

// onclick;
// onChange;  Event handlers