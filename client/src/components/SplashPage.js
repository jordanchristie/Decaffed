import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar'

class SplashPage extends Component {
    render() {
        return (
            <Splash>
                <Title>Decaffed</Title>
                <Tagline>Find a coffee shop nearby to recaffeinate.</Tagline>
                <SearchBar {...this.props}/>
            </Splash>
        )
    }
}

export default SplashPage;

const Splash = styled.section`
    height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background: url('https://media.giphy.com/media/kQHPwJmJxKzyU/giphy.gif') no-repeat center center;
    background-size: cover;
    color: #fff;
    text-align: center;
`

const Title = styled.h1`
    font-size: 5em;
`

const Tagline = styled.h3`
    font-size: 3em;
    width: 75%;
`