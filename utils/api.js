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
        deskName
    }))
}

export function submitCard({ deckName, cardName }){
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[deckName].questions.push(cardName)
            AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
        })
}

