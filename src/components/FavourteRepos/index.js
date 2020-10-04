import React from 'react'
import { useSelector } from 'react-redux'
import RepoDetails from '../GitHubPublicRepositories/RepoDetails'
import { ReposContainer } from './styledComponents'
export default function FavourteRepos() {

    const favourteRepos = useSelector(state => state.favortiesList.favorties)
    return (
        <ReposContainer> <strong>favourite Repos are</strong>
            {
                favourteRepos.map(repo => <RepoDetails repo={repo} key={repo.id} favoriteRepo={true} />)
            }

        </ReposContainer>)
}