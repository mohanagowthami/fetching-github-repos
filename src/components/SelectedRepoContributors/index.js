import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContributorImage, ContributorsList, EachRepoContainer } from './styledComponents'
export default function SelectedRepoContributors() {

    const [contributors, setContributors] = useState([])
    const { userName, selectedRepo } = useParams()
    console.log(userName, selectedRepo, "ref")

    useEffect(() => {

        async function getContributors() {
            try {

                const result = await fetch(`https://api.github.com/repos/${userName}/${selectedRepo}/contributors`)
                const response = await result.json()
                console.log(response, "response")
                setContributors(response)
            }
            catch (error) {
                console.log(error)
            }
        }
        getContributors()

    }, [userName, selectedRepo])


    const renderContributorsOfRepo = () => {

        return <EachRepoContainer >
            <p><strong> userName:</strong>{userName}</p>
            <p><strong>repo Name:</strong>{selectedRepo}</p>
            <strong>contributors for this repos are</strong>
            <ContributorsList>
                {contributors.map(ele => <ContributorImage key={ele.id} src={ele.avatar_url} />)
                }
            </ContributorsList>
        </EachRepoContainer>

    }
    return (
        <>
            {renderContributorsOfRepo()}
        </>)
}