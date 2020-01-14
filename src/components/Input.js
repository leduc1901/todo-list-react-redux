import React from "react";
import {connect} from "react-redux"

class Input extends React.Component{

    pressEnter = (e) => {
        if(e.keyCode === 13){
            this.props.dispatch({type : 'pressEnter' , data : e.target.value})
            document.getElementById('name').value = "";
        }
        
    }

    
    
    render(){
        return (
            <React.Fragment>
                <input type="text" id="name" onKeyUp={this.pressEnter} placeholder="[Add New Todo]"/>  
                   
            </React.Fragment>     
        )
    }

}

export default connect((state) => {
    return {
        baseValue : state.value,
        currentPage : state.currentPage,
        totalPage : state.totalPage
    }
})(Input)