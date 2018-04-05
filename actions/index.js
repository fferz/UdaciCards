export const RECEIVE_DECKS = 'RECEIVE_DESKS'
export const ADD_DECK = 'ADD_DESK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks (decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDesk (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCard (card) {
    return {
        type: ADD_CARD,
        card,
    }
}