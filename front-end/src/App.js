import React, {Component} from 'react';

import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import { AppProvider } from './components/Context';

import PrimaryHeader from './components/PrimaryHeader';
import SecondaryHeader from './components/SecondaryHeader';
import PrimaryHeaderMobile from './components/PrimaryHeaderMobile';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WorksScreen from './screens/WorksScreen';
import WorkDetailScreen from './screens/WorkDetailScreen';
import ContactScreen from './screens/ContactScreen';
import ResumeScreen from './screens/ResumeScreen';

import './App.scss';
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
        let screenOverlay = this.state.toggled ? "screen-overlay opened" : "screen-overlay";
        return (
            <AppProvider value={{state: this.state, data: data, handlers: this.handlers}}>
                {/* <BrowserRouter basename={"portfolio-site"}> */}
                <HashRouter>
                    <div className="App">
                        <SecondaryHeader/>
                        <main role="main">
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
                        </main>
                        <div onClick={this.handleToggleMenu} className={screenOverlay}></div>
                    </div>
                </HashRouter>
            </AppProvider>
        );
    }
}

export default App;
