import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  render(){
    return(
    <div className = 'App'>
      <h1>{this.state.arr[0]}</h1>
      <h1>{this.state.arr[1]}</h1>
      <h1>{this.state.arr[2]}</h1>
      <h1>{this.state.arr[3]}</h1>
      <h1>{this.state.arr[4]}</h1>
    </div>
    )
  }

}
  
export default App;
