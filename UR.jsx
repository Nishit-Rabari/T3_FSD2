// import React ,{useReducer} from 'react';
// const initialstate=0;
// function reducer(state,action){
//     if(action.type==='increment'){
//         return state+1;
//     }
//     if(action.type==='decrement'){
//         return state-1;
//     }
// }

// function UR(){
//     const[state,dispatch]=useReducer(reducer,initialstate);
//     return(
//         <>
        
//         <button onClick={()=>dispatch({type:'increment'})}>Click Me({state})</button>
//         <button onClick={()=>dispatch({type:'decrement'})}>Click Me({state})</button>
//         </>
//     )
// }
// export default UR;
import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action){
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state; // always return current state for unknown actions
  }
}

function UR() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment ({state})
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement ({state})
      </button>
    </>
  );
}

export default UR;