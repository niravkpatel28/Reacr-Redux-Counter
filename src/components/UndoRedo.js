
import React from 'react';
import store from '../redux/store';
import {UNDO,REDO} from '../redux/types';
import { actionObjectGenerator } from '../redux/actions';
import {connect} from 'react-redux';


function UndoRedo (props){


    return(
        <>
            <br/>
            <button onClick={props.undoAction}> Undo </button>   
            <br/>
            <button onClick={props.redoAction}> Redo </button>   

        </>
    )
}

// const mapStateToProps = ()=>{
//     return {

//     }
// }

const mapDispatchToProps= (dispatch)=>{
    return{
        undoAction: ()=>{
            dispatch(actionObjectGenerator(UNDO),store.getState());
        },
        redoAction : ()=>{
            dispatch(actionObjectGenerator(REDO),store.getState());
        }
    }
}
export default connect(null,mapDispatchToProps)(UndoRedo);