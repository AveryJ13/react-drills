import React, {Component} from 'react';
import Pic from'./compononent/Pic'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      
      <Pic santa = {'https://cache.desktopnexus.com/thumbseg/28/28087-bigthumbnail.jpg'}/>
      
    )
  }

} 

export default App;
