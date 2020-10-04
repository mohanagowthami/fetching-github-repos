
import { ADD_FAVORTE, REMOVE_FAVORTE } from '../constant'

const initialState = {
    favorties: []
}

export default function favoriteReducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {

        case ADD_FAVORTE:
            {
                return Object.assign({}, state, { favorties: state.favorties.concat(payload) })
            }

        case REMOVE_FAVORTE:
            {
                const x = state.favorties.filter(ele => {
                    return ele.id !== payload.id


                })
                return Object.assign({}, state, { favorties: x })
            }
        default:
            return state



    }

}