import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

class SplashPage extends Component {
    render() {
        return (
            <Splash>
                <Title>Decaffed</Title>
                <Tagline>Find a coffee shop nearby to recaffeinate.</Tagline>
                <SignUp bg="#333" href="/auth/github">Login with Github</SignUp>
                <SignUp bg="#3f51b5" href="/auth/google">Login with Google</SignUp>
                <SignUp bg="#1da1f2" href="/auth/twitter">Login with Twitter</SignUp>
                <SearchBar {...this.props}/>
            </Splash>
        )
    }
}

export default SplashPage;

const Splash = styled.section`
    margin-top: 4em;
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

const SignUp = styled.a`
    cursor: pointer;
    background: ${props => props.bg};
    text-decoration: none;
    border: none;
    border-radius: .2em;
    color: #fff;
    padding: .25em .5em;
    margin: .5em;
    font-size: 24px;
`