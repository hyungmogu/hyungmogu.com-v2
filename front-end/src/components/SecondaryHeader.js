import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { AppConsumer } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class SecondaryHeader extends Component {

    toggleMenu = () => {
        this.props.appContext.handlers.handleToggleMenu();
    }

    render() {
        return (
            <header className="header--mobile">
                <nav>
                    <div onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars}/></div>
                    <div className="menu"><strong><NavLink to="/">Hyungmo Gu</NavLink></strong></div>
                    <div></div>
                </nav>
            </header>
        );
    }
};

let SecondaryHeaderWithRoute = withRouter(SecondaryHeader);

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <SecondaryHeaderWithRoute
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));