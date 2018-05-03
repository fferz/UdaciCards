import { RECEIVE_DECKS,ADD_DECK,ADD_CARD } from '../actions'

function cards(state = {}, action){
    switch (action.type){
        case RECEIVE_DECKS:
            console.log('in reducer')
            return {
                ...state,
                ...action.decks,
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck,
            }
        case ADD_CARD:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default cards