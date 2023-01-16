import userEvent from '@testing-library/user-event';
import { useReducer } from 'react';



function usePersistedReducer(reduc){
    const [state, dispatch] = useReducer(reducer, initialState, () =>{})
}