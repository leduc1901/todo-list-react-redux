import React from "react";
import {connect} from "react-redux"

class List extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         baseValue : props.baseValue
    //     }
    // }
    
    deleteState = (evt) => {
        
        console.log(2)
        evt.stopPropagation();
        this.props.dispatch({type: 'deleteState' , payload : evt.currentTarget.id})
        
    }

    completeTask = (evt) => {
        console.log(1)
        this.props.dispatch({type : 'completeTask' , payload : evt.currentTarget.id })
    }

    fetchData = () => {
        let arrLi = []
        let j = this.props.baseValue.length;
        if(this.props.totalPage == 1){
            this.props.dispatch({type : 'firstPage'})
        }
        if(this.props.totalPage >= 1){
            for(let i = (this.props.currentPage*5) -5; i <= (this.props.currentPage*5) -1 ; i++){
                if(i < this.props.baseValue.length ){
                    arrLi.push(<li class="item" id={i}  onClick={this.completeTask.bind(this)}>
                                    <span data-id={i} id={i} onClick={this.deleteState.bind(this)}><i class='fa fa-trash'>  </i></span>
                                    {this.props.baseValue[i].val}
                                </li>) 
                }
            }
        }else{
            for(let i = 0; i <  j ; i++){
               arrLi.push(<li className={this.props.baseValue[i].isDone ? 'item completed' : 'item'} onDoubleClick={this.completeTask.bind(this)}>
                                <span data-id={i} id={i} onClick={this.deleteState.bind(this)}><i class='fa fa-trash'>  </i></span>
                                {this.props.baseValue[i].val}
                            </li>) 
            }
        }
        if(this.props.currentPage != 1 && this.props.currentPage != 0 && arrLi.length == 0){
            
            this.props.dispatch({type : "returnPage" , payload : this.props.currentPage })
        }      
        console.log(arrLi)
        console.log(this.props.baseValue)
        return arrLi
    }

    

    // componentDidUpdate(prevProps){
    //     if(this.props.baseValue !== prevProps.baseValue){
    //         console.log(1)
    //         this.fetchData()
    //     }
        
    // }


    render(){
        return (
            <ul class="todoList" id="todoList">    	
                {this.fetchData()}
		    </ul>     
        )
    }

}

export default connect((state) => {
    return {
        baseValue : state.value,
        currentPage : state.currentPage,
        totalPage : state.totalPage
    }
})(List)