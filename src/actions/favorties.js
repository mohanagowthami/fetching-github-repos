
import { ADD_FAVORTE, REMOVE_FAVORTE } from '../constant'

export function addFavorties(payload) {
    return { type: ADD_FAVORTE, payload }
};

export function removeFavorties(payload) {
    return { type: REMOVE_FAVORTE, payload }
}