
import defaultState from './defaultState'


const reducer = (state = defaultState , action) => {
    // if(action.type === 'pressEnter'){
    //     state.value.push(action.data)
        
    //     return Object.assign({}, state , {
    //         value : state.value
    //     });
    // }
    let newState;
    switch(action.type){
        case 'pressEnter':
            if(action.data == ""){
                return state
            }else{
                
                return Object.assign({}, state , {
                    value : state.value.concat({val : action.data  , isDone : false})
                });
            } 
            
        case 'completeTask':
            newState = {...state}
            console.log(newState.value[action.payload].isDone)
            newState.value[action.payload] = {
                ...state.value[action.payload] , 
                isDone : !newState.value[action.payload].isDone 
            }
            console.log(state.value)
            console.log(newState.value)
            return newState
        case 'deleteState':
                let newValue = Object.assign([], state.value);
                newValue.splice(action.payload , 1)
                console.log(newValue)
                return Object.assign({}, state ,{
                    value : newValue
                });    
        case 'setPage':
                return Object.assign({}, state , {
                    totalPage : action.page,
                });
        case 'firstPage':
                return Object.assign({}, state , {
                    currentPage : 1,
                });
        case 'selectPage':
                return Object.assign({}, state , {
                    currentPage : parseInt(action.payload)
                })
        case 'prevBtn':
                if(action.payload == 1){
                    return state
                }else{
                    return Object.assign({}, state , {
                        currentPage : action.payload - 1
                    });
                }
        case 'nextBtn':
                if(action.payload == state.totalPage){
                    return state
                }else{
                    return Object.assign({}, state , {
                        currentPage : action.payload + 1
                    });
                }
        case 'returnPage':
            return Object.assign({}, state , {
                currentPage : action.payload - 1
            })
        // case 'deleteAll':
        //     return Object.assign({}, state , {
        //         value : [],
        //         currentPage : 0,
        //         totalPage : 0,
        //         listPage : []
        //     });
    }
    


return state;
}

export default reducer;