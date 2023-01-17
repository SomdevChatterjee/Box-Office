import { useReducer, useEffect, useState } from 'react';

function showReducer(prevState, action){
    switch(action.type){
        case 'ADD':{
            return [...prevState, action.showId];
        }
        case 'REMOVE':{
            return prevState.filter( showId => showId !== action.showId);
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

export function useLastQuery(key = 'lastQuery'){
    const [input, setInput] = useState(() =>{
        const persistedValue = sessionStorage.getItem(key);
        return persistedValue ? JSON.parse(persistedValue):"";
    } );

    const setPersistedInput = (newState) =>{
        setInput(newState);
        sessionStorage.setItem(key, JSON.stringify(newState));

    };

    return [input, setPersistedInput];
}

export function useShows(showId){
    const initialState = {
        show: null,
        isLoading: true,
        error: null,
      };
    const [{ show, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
      );
    
      useEffect(() => {
        let isMounted = true;
    
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
          .then(results => {
            if (isMounted) {
              dispatch({ type: 'FETCH_SUCCESS', show: results });
            }
          })
          .catch(err => {
            if (isMounted) {
              dispatch({ type: 'FETCH_FAILED', error: err.message });
            }
          });
    
        return () => {
          isMounted = false;
        };
      }, [id]);
    
    
}