import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import reducer from './reducers';

// without middleware
// const store = createStore(reducer);

//using middleware
const middleware = (store)=>{
    return (next)=>{
        return (action)=>{
            console.log('Middleware ', action.type);
            action.company="Raw Engineering"
            // action.raw = `<span aria-label="a rocket blasting off" role="img">🚀</span>`
            // action.raw = '🚀'
            
            next(action);
        }
    }
    
}

const store = createStore(reducer,applyMiddleware(middleware));


export default store;