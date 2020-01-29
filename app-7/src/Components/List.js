import React, {Component} from 'react'
import Todo from '../Components/Todo'
import '../App.css'

class List extends Component{


    render(){
        return(
           <div> {this.props.list.map(e => <Todo e = {e}/>)}</div>
        )
    }


}

export default List