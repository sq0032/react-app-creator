import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import {addTodo} from '../actions'
  
class App extends Component {
  
  addTodo(){
    const {dispatch} = this.props
    dispatch(addTodo('new todo'))
//    console.log(addTodo('new todo'))
  }
  
  render() {
    console.log('render App.js')
    return (
      <div>
        <TodoList />
        <button onClick={this.addTodo.bind(this)}>Add Todo</button>
      </div>
    )
  }
}

const style = {
  screen: {
    left:'0px',
    right:'1px',
    top:'100px',
    bottom: '0px',
    border: '1px solid black',
    position: 'absolute',
  },
  todo:{
    fontSize: '5em'
  }
}

App.propTypes = {
//  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//    text: PropTypes.string.isRequired,
//    completed: PropTypes.bool.isRequired
//  }).isRequired).isRequired,
//  visibilityFilter: PropTypes.oneOf([
//    'SHOW_ALL',
//    'SHOW_COMPLETED',
//    'SHOW_ACTIVE'
//  ]).isRequired
}

//function select(state) {
//  return {
//    todossss: state.todos
//  }
//}

//export default App
// Wrap the component to inject dispatch and state into it
export default connect()(App)