import React, {Component} from 'react'

import '../App.css'

class NewTask extends Component{
    render(){
        return(
            <div>
                <input onChange = {(e) => this.props.handleInput(e.target.value)}/>
                </div>
        )
    }


}

export default NewTask