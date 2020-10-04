import { FETCHING_REPOS_FAIL, FETCHING_REPOS_IN_PROGRESS, FETCHING_REPOS_SUCCESS } from "../constant";

export function getRepos() {
    return async function (dispatch) {
        try {
            dispatch({ type: FETCHING_REPOS_IN_PROGRESS, payload: { fetchingReposInProgress: true } })
            const response = await fetch("https://api.github.com/repositories")
            const json = await response.json()

            dispatch({ type: FETCHING_REPOS_SUCCESS, payload: { repos: json, fetchingReposSuccess: true, fetchingReposInProgress: false } });
        }
        catch (error) {
            dispatch({ type: FETCHING_REPOS_FAIL, payload: { fetchingReposError: true, fetchingReposInProgress: false } })
        }


    };
}