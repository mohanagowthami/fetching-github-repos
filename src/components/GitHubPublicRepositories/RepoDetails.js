import React from 'react'
import { useDispatch } from 'react-redux'

import { addFavorties, removeFavorties } from '../../actions/favorties'
import { ADD_TO_FAVOURTElIST, KNOW_MORE_ABOUT_CONTRIBUTORS, REMOVE_FROM_FAVOURTELIST } from '../../constant'
import CustomButton from '../common/CustomButton'
import { RepoContainer, RepoOwnerImage, RepoDetailsContainer, StyledLink } from './styledComponents'
export default function RepoDetails({ repo, favoriteRepo = false }) {
    const { owner: { avatar_url, login }, contributors_url } = repo
    const url = contributors_url.substring(29)
    const userNameEndingIndex = url.indexOf("/")
    const userName = url.substring(0, userNameEndingIndex)
    const repoEndingIndex = url.lastIndexOf("/")
    const selectedRepo = url.substring(userNameEndingIndex + 1, repoEndingIndex)
    const dispatch = useDispatch()


    const handleAddToFavourites = (repo) => {
        if (favoriteRepo)
            dispatch(removeFavorties(repo))

        else
            dispatch(addFavorties(repo))
    }

    return (<><RepoContainer >
        <RepoOwnerImage src={avatar_url} />
        <RepoDetailsContainer>
            <p><strong>AUTHOUR NAME:</strong>  {login}</p>
            <CustomButton title={favoriteRepo ? REMOVE_FROM_FAVOURTELIST : ADD_TO_FAVOURTElIST} style={{ margin: 10 }} onClick={() => handleAddToFavourites(repo)} />
            <StyledLink to={`/gitHubUser/repos/${userName}/${selectedRepo}/contributors`}  >
                <CustomButton title={KNOW_MORE_ABOUT_CONTRIBUTORS} style={{ margin: 10 }} />
            </StyledLink>
        </RepoDetailsContainer>
    </RepoContainer>

    </>)
}