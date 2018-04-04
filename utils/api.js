import { AsyncStorage } from 'react-native'
import { CARDS_STORAGE_KEY } from './_cards'

export function fetchCardsResult(){
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
}

export function submitDesk({ deskName }){
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY, JSON.stringify({
        deskName
    }))
}

export function submitCard({ deskName, cardName }){
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[deskName].questions.push(cardName)
            AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
        })
}