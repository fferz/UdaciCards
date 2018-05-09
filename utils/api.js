import { AsyncStorage } from 'react-native'
import { CARDS_STORAGE_KEY, setResults } from './_cards'

export function fetchCardsResult(){
    console.log('entro a fetchCardsResult')
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then(console.log('paso a setResults'))
        .then(setResults())
}

export function submitDeck({ deckName }){
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        deckName
    }))
}

export function submitCard({ deckName, cardQuestion, cardAnswer }){
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[deckName].push(cardQuestion)
            data[deckName].push(cardAnswer)
            AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
        })
}

