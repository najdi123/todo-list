import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Todo from './components/todoinput';
import TodoItems from './components/todoItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 0, text:"Make dinner tonight!"},
        {id: 1, text: "Fold the laundry."},
        {id: 2, text: "Learn to make a React app!"}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    console.log("Todo added; ", todoText);
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    console.log("removing: ", id);
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })

  }

  render() {
    return (
      <div className="App">
        < div className = "todo-wrapper" >
          <Header/>
          <Todo todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map ((todo) => {
                return <TodoItems todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />  
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
