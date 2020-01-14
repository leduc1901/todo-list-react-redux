import React from "react";
import {connect} from "react-redux"

class Title extends React.Component{

    render(){
        return (
            <h1>To-Do List<i class="removeall" onClick={()=>this.props.dispatch({type : "deleteAll"})}>Clear</i><i class="add" onClick={this.props.dispatch({type : "removeInput"})}>+</i></h1>       
        )
    }

}

export default connect((state) => {

})(Title)