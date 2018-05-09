import { RECEIVE_DECKS,ADD_DECK,ADD_CARD } from '../actions'

function cards(state={}, action){
    switch (action.type){
        case RECEIVE_DECKS:
            console.log('in reducer')
            return {
                ...state,
                decks: action.decks,
            }
        case ADD_DECK:
        
        console.log('state', state.decks)
        let prueba = {
            ...state,
            [action.deck]: {
                title: action.deck
            }
        }
        console.log('action', prueba)
            return {
                ...state,
                [action.deck]: {
                    title: action.deck
                }
            }
                
        case ADD_CARD:
            return {
                ...state,
            }
        default:
            return state
    }
    console.log('state-end', state)
}

export default cards