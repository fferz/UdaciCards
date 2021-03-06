import { AsyncStorage } from 'react-native'

export const CARDS_STORAGE_KEY = 'UdaciCards:Cards'

function setDummyData(){
    let dummyData = {}

    dummyData = {
        React: {
            title: 'React',
            questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
            ]
        }
    }
    
    AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(dummyData))
    console.log('dummyData', dummyData)

    return dummyData
}

export function setResults (results) {
    console.log('set Results', results)
    return (results === null || results === undefined)
        ? setDummyData()
        : results
}