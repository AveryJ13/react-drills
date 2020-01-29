import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      filter: '',
      arr: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  updateList = (val) =>{
    this.setState({filter: val})
  }

  render(){
    let filterToDisplay = this.state.arr.filter((element, index) => {
        return element.includes(this.state.filter);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });


    return(
    <div className = 'App'>
      <input onChange={(e) => this.updateList(e.target.value)}/>
  
      {filterToDisplay}
    </div>
    )
  }

}
  
export default App;

