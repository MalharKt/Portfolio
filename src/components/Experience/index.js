
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const index = () => {
    return (
        <Container id="experience">
        </Container>
    )
}

export default index