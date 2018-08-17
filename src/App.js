import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from './component/Search';
import ListToDo from './component/ListToDo';
import * as actionType from './store/action';

class App extends Component {

  // constructor(props) {
  //   super(props); 
  //   this.state = {
  //     item: ''
  //   }
  //  }

  // handleChange = (event) => {
  //   this.setState({item: event.target.value});
  // }

  // handleSubmit = (event) => {
  //   const itemObj = {
  //     item: this.state.item,
  //     completed: false,
  //     itemID: this.state.todoList.length
  //   };
  //   this.setState({
  //     todoList: [...this.state.todoList, itemObj],
  //     item: ''
  //   });
  //   event.preventDefault();
  // }

  handleToDoStatus (event) {
    const position = event.target.id;
    let newtodoList = [...this.state.todoList];
    newtodoList[position].completed = !newtodoList[position].completed;
    this.setState({
        todoList: newtodoList
    })
  }

  render() {
    return (
      <div className="well" >
      <h1 className="col-md-10">TODO LIST</h1>
        <Search 
          item={this.props.item}
          handleChange={this.props.onHandleChange}
          onSubmit={this.props.onHandleSubmit}
        />
        <ListToDo 
          todoList={this.props.tdList}
          onChange={this.props.onHandleToDoStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      item: state.item,
      tdList: state.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onHandleChange: (event) => dispatch({ type: actionType.TEXT_CHANGE, item: event.target.value }),
    onHandleSubmit: (event) => dispatch({ type: actionType.SUBMIT, event: event }),
    onHandleToDoStatus: () => dispatch({ type: actionType.TODO_STATUS })
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
