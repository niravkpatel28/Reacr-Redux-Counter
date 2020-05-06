//Defines Counter Component 

import React from 'react';
import store from '../redux/store'
import { actionObjectGenerator } from '../redux/actions';
import { INCREMENT, DECREMENT,STORE_RESULTS } from '../redux/types';
import { connect } from 'react-redux';

function Counter(props){

    const incrementCount= ()=>{
        //dispatch action for incrementing count
        // store.dispatch(action,state)
        // store.dispatch( actionObjectGenerator(INCREMENT), store.getState());
        props.incrementCount();
        console.log(store.getState());
        props.storeResults(INCREMENT);
    }
 
    const decrementCount =()=>{
        // store.dispatch(actionObjectGenerator(DECREMENT), store.getState());
        props.decrementCount();
        console.log(store.getState());
        props.storeResults(DECREMENT);
        
    }
    return(
        <>
            <h2> Counter Value </h2>
            {/* <p> {JSON.stringify(store.getState())} </p> */}
            <p> {props.countValue}</p>
            <button onClick={ incrementCount }>{' '} + {'  '}</button>
            <br/>
            <button onClick={ decrementCount }>{' '} - {'  '}</button>
        </>
    )
}


const mapStateToProps = (state)=>{
    return{
        countValue:state.count
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        incrementCount: ()=>{
            dispatch(actionObjectGenerator(INCREMENT),store.getState());
        },
        decrementCount:()=>{
            dispatch(actionObjectGenerator(DECREMENT),store.getState());
        },
        storeResults: (callingAction)=>{
            dispatch(actionObjectGenerator(STORE_RESULTS,{operation:callingAction}),store.getState());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);