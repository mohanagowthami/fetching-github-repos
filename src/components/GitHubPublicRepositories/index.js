import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { getRepos } from '../../actions/getRepos'
import Header from '../common/Header'
import Loader from '../common/Loader'
import RepoDetails from './RepoDetails'

import { Container, ReposWrapper } from './styledComponents'



const fetchingDetails = createSelector(state => state.repos.repos,
    state => state.repos.fetchingReposInProgress,
    state => state.repos.fetchingReposFail, (repos, fetchingInProgress, fetchingReposFail) => ({ repos, fetchingInProgress, fetchingReposFail }))



export default function GitHubPublicRepositories() {
    const dispatch = useDispatch()

    const [error, setError] = useState(false)

    const details = useSelector(state => fetchingDetails(state))
    console.log(details, "details")
    const { repos, fetchingInProgress, fetchingReposFail } = details

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    const renderRepos = () => {
        return repos.map(repo => {
            return <RepoDetails repo={repo} key={repo.id} />
        })
    }

    return (
        <>
            {repos.length === 0 ? <Container> <Loader /></Container> : <ReposWrapper>
                <Header />
                {renderRepos()}</ReposWrapper>}
        </>)
}