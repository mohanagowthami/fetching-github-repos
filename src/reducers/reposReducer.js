import { FETCHING_REPOS_FAIL, FETCHING_REPOS_IN_PROGRESS, FETCHING_REPOS_SUCCESS } from "../constant";

const initialState = {
    repos: [],
    fetchingReposInProgress: false,
    fetchingReposSuccess: false,
    fetchingReposFail: false
}


export default function reposReducer(state = initialState, action) {
    const { type, payload } = action


    switch (type) {
        case FETCHING_REPOS_IN_PROGRESS:
            {

                const x = Object.assign({}, state, { ...payload })
                console.log(x, "x")
                return x;


            }
        case FETCHING_REPOS_SUCCESS:
            {

                const x = Object.assign({}, state, { ...payload })
                console.log(x, "x")
                return x;

            }
        case FETCHING_REPOS_FAIL:
            {
                return Object.assign({}, state, { ...payload })
            }
        default:
            return state
    }

}