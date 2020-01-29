import React, {Component} from 'react';
import List from './Components/List'
import './App.css';
import NewTask from './Components/NewTask'
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
    

    return(
      <div className = 'App'>
        <h1>My to-do list:</h1>
        <div>
          <NewTask handleInput = {this.handleInput}/>
    <button onClick = {this.makeList} >Add</button>
          </div>
      {/* <List makeList = {this.makeList} /> */}
      <List list = {this.state.list} />
    
      </div>
    )
  }

}


export default App;
