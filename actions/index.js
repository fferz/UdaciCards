export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DESK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks (decks) {
    console.log('action receive_decks')
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addCard (deck, question, answer) {
    return {
        type: ADD_CARD,
        deck,
        question,
        answer,
    }
}