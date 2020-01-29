import React, {Component} from 'react';

import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      list: [],
      tasks: ''
    }
  }

  handleInput = (val) =>{
    this.setState({tasks: val})
  }

  makeList = () =>{
    this.setState({list: [...this.state.list, this.state.tasks]})
  }

  render(){
    console.log(this.state.list)
    var somewhere = this.state.list.map(e => <div>{e}</div>)

    return(
      <div className = 'App'>
        <h1>My to-do list:</h1>
        <div>
          <input onChange = {(e) => this.handleInput(e.target.value)}></input>
    <button onClick = {this.makeList} >Add</button>
          </div>
    <div className= 'col'>{somewhere}</div>
      </div>
    )
  }

}

export default App;
