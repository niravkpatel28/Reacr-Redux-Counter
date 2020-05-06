import { INCREMENT, DECREMENT,STORE_RESULTS, DELETE_RESULT, UNDO, REDO} from './types';
import uniqid from 'uniqid';
//pure function 
const initialState ={
    count:0,
    results: [],
    redo:'' // to store all results popped out of stack
}
const reducer = (state=initialState,action)=>{
    //prints action received from middleware 

    console.log(action);
    //returns modified state 
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count:state.count+1
            }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1
            }
        case STORE_RESULTS:
            return{
                ...state,
                results:state.results.concat({
                    type:action.operation,
                    value: state.count,
                    key: uniqid(),
                    logo: action.raw
                })
            }
        case DELETE_RESULT:
            return{
                ...state,
                results: state.results.filter((result)=>{
                    return result.key!==action.key
                    // return true
                })
            }

        case UNDO: 
        
            let lastAction= [...state.results].splice([...state.results].length-1,1);
            console.log('last action', lastAction)
            return {
                ...state,
                results: [...state.results].filter((result,i)=>{
                    return [...state.results].length-1!==i;
                }),
                redo:lastAction
            }
        case REDO: 
            return {
                ...state,
                results: [...state.results].concat(...state.redo),
                redo:[]
            }

        default:
            return state;
    }
}

export default reducer;