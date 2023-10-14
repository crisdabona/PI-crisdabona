import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types"

const initialState = {
    myFavorites: [],
    allFavorites: [],

}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload,
                allFavorites: action.payload,
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload
            }

        case FILTER:
            const filteredGender = [...state.allFavorites].filter( favorite => {
                return favorite.gender === action.payload
            })

            return {
                ...state,
                myFavorites: filteredGender
            }

        case ORDER:
            const orderFavorites = action.payload === 'A'
                                ? [...state.myFavorites].sort((a,b) => a.id - b.id)
                                : [...state.myFavorites].sort((a,b) => b.id - a.id)

            return{
                ...state,
                myFavorites: orderFavorites
            }
        
            default:
            return {...state}

        
    }
}   

export default reducer