import React from 'react' 
import { connect } from 'react-redux'
import { DELETE_RESULT } from '../redux/types'
import { actionObjectGenerator } from '../redux/actions'
import store from '../redux/store'
function Results(props){


    const renderResults = ()=>{
        let resultHistory = props.results.map((result,i)=>{
            return (
                <p key={result.key} id={result.key}
                 onDoubleClick={(event)=>{
                     props.deleteResult(event);

                }}> Action: {result.type} ------  Value: {result.value}  </p>
                
                //  }}> {JSON.stringify(result)} </p>
            )
        })
        return (
            <>
                {resultHistory}
            </>
        )
    }
    return(
        <>
            {renderResults()}
        </>

    )
}



// export default Results;
const mapStateToProps = (state)=>{
    return{
        results:state.results
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        deleteResult: (event)=>{
            console.log(event.target.id)
            console.log('delete this result')
            dispatch(actionObjectGenerator(DELETE_RESULT,{key:event.target.id}),store.getState());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Results)