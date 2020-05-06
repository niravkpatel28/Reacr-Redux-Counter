// create action objects corresponding to different actions 
import { INCREMENT, DECREMENT, STORE_RESULTS,DELETE_RESULT, UNDO,REDO} from './types';


export const actionObjectGenerator =(type, payload={})=>{
    //return a javascript object with action types 
    switch(type){
        case INCREMENT:
            return{
                type: INCREMENT
            }
        case DECREMENT:
            return{
                type:DECREMENT
            }
        case STORE_RESULTS:
            return{
                type:STORE_RESULTS,
                operation: payload.operation
            }
        case DELETE_RESULT: 
            console.log('payload in delete', payload)
            return{
                type:DELETE_RESULT,
                key:payload.key
            }

        case UNDO: 
            return{
                type: UNDO
            }
        case REDO: 
            return{
               type:REDO
            }
        default:
            return{
                type:'invalid action'
            }
    }
}

