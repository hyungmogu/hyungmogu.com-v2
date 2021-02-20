import './App.scss';
import React, {Component} from 'react';
import styled from 'styled-components';
import { HashRouter, Route, Switch } from 'react-router-dom';

import {
    PrimaryHeader,
    SecondaryHeader,
    PrimaryHeaderMobile
} from './components/Navigation'
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorksScreen from './screens/WorksScreen';
import WorkDetailScreen from './screens/WorkDetailScreen';
import ContactScreen from './screens/ContactScreen';
import ResumeScreen from './screens/ResumeScreen';

import { AppProvider } from './components/Context';
import { data } from './data.js';

class App extends Component {
    state = {
        toggled: false,
    };

    handleToggleMenu = () => {
        this.setState(prev => {
            return {
                toggled: !prev.toggled
            }
        });
    }

    handlers = {
        handleToggleMenu: this.handleToggleMenu
    }

    render() {
        const ScreenOverlayDiv = styled.div`
            display: ${this.state.toggled ? "initial" : "none"};
            background-color: black;
            opacity: 0.5;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 1;

            @media screen and (min-width: 930px) {
                display: none;
            }
        `;

        const Main = styled.main`
            display: flex;

            @media screen and (min-width: 930px) {
                height: 100vh;
                overflow-y: hidden;
            }
        `;

        return (
            <AppProvider value={{state: this.state, data: data, handlers: this.handlers}}>
                <HashRouter>
                    <div className="App">
                        <SecondaryHeader/>
                        <Main role="main">
                            <PrimaryHeader/>
                            <PrimaryHeaderMobile/>
                            <Switch>
                                <Route path="/about" component={AboutScreen}/>
                                <Route path="/works/:id" component={WorkDetailScreen}/>
                                <Route path="/works" component={WorksScreen}/>
                                <Route path="/contact" component={ContactScreen}/>
                                <Route path="/resume" component={ResumeScreen}/>
                                <Route exact path="/" component={HomeScreen}/>
                            </Switch>
                        </Main>
                        <ScreenOverlayDiv onClick={this.handleToggleMenu}></ScreenOverlayDiv>
                    </div>
                    <div id="portals"></div>
                </HashRouter>
            </AppProvider>
        );
    }
}

export default App;
