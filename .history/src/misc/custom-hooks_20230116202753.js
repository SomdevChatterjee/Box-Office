import { useReducer, useEffect } from 'react';

function showReducer(prevState, action){
    switch(action.type){
        case 'ADD':{
            return [...prevState, action.showId];
        }
        case 'REMOVE':{
            return prevState.filter()
        }
        default: return prevState;
    }
}

function usePersistedReducer(reducer, initialState, key){
    const [state, dispatch] = useReducer(reducer, initialState, (initial) =>{
        const persisited = localStorage.getItem(key);

        return persisited ? JSON.parse(persisited) : initial;
    });

    useEffect( ()=>{
        localStorage.setItem(key, JSON.stringify(state));

    }, [state, key]);
    return [state, dispatch]
}

export function useShow(key = 'shows'){
    
    return usePersistedReducer(showReducer, [], key)
}