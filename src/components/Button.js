import React from "react";

import {connect} from "react-redux"

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            current : null
        }
        
    }
  
    selectPage = (evt) => {
        this.props.dispatch({type: 'selectPage' , payload : evt.currentTarget.id})
        
    }

    prevBtn = () => {
        this.props.dispatch({type:"prevBtn" , payload: this.props.currentPage})
    }
    
    nextBtn = () => {
        this.props.dispatch({type:"nextBtn", payload: this.props.currentPage})
    }
 
    renderButton = () => {
        if(this.props.baseValue.length >= 5 ){
            let totalPage = Math.ceil(this.props.baseValue.length / 5 );
            let arr = [];
            this.props.dispatch({type : 'setPage', page : totalPage })
            
            for(let i = 0 ; i < totalPage ; i++){
                arr.push(i)
            }
            let renderBtn = arr.map(i => {
                return (
                    <li 
                    className={this.props.currentPage === i+1 ? "pagili current" : "pagili"}  
                    onClick={this.selectPage.bind(this)} id={i+1} >
                        <a href='#'  id={i+1}>{i+1}</a>
                </li>
                )
            })
            return (
                <div class="pagination1">
                    <div class="previousBtn" onClick={this.prevBtn}>Previous</div>
                    <div class="nextBtn" onClick={this.nextBtn}>Next</div>
                    <ul id="pagin" class="pagin1">
                        {renderBtn}
                    </ul>
               </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.renderButton()}
            </React.Fragment>
        )
    }
}

export default connect((state) => {
    return {
        baseValue : state.value,
        currentPage : state.currentPage,
        totalPage : state.totalPage,
        listPage : state.listPage
    }
})(Button)