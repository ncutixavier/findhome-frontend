import React from 'react'
import styled from 'styled-components'

const Title = ({ mainTitle, subTitle }) => {

    const MainTitle = styled.h1`
    font-size: 3rem;
    letter-spacing: .3rem;
`
    const SubTitle = styled.p`
    font- size: 1.6rem;
    letter-spacing: .3rem;
`

    const TitleContainer = styled.div`
    padding: 2% 0;
    text-align: center;
`

    return (
        <TitleContainer>
            <MainTitle>{mainTitle}</MainTitle>
            <SubTitle className="text-muted">{subTitle}</SubTitle>
        </TitleContainer>
    )
}

export default Title
