import React, {Component} from 'react'
import './App.css'
class App extends Component{

  constructor(){
    super()
    this.state ={
      displayDom: ''
    }
  }

  render(){
    return(
      <div className = 'App'>
        <input onChange = {(e) => this.displayDom(e.target.value)}></input>
    <div>{this.state.displayDom}</div>
      </div>
    )
  }
  displayDom = (val) =>{
    this.setState({displayDom: val})
  }
}

export default App;
