import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { AppConsumer } from '../Context';
import Logo from '../../media/moe.jpeg';

export const headerHeight = "1.4rem";
export const headerWidthDesktop = "14rem";
export const headerPaddingHeight = "1.3rem";

const LogoImg = styled.img`
    width: 9rem;
    height: 9rem;
    border-radius: 50%;
    margin: 0 0 1rem 0;
`;

const Nav = styled.nav`
    ul {
        padding: 0;
        margin: 0;
    }
    li {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;

const PrimaryNav = styled(Nav)`
    text-align: center;
    margin: 0 0 1rem 0;

    h3 {
        margin: 0 0 2.25rem 0;
    }

    li {
        margin: 0 0 0.5rem 0;
    }
`;

const SocialNav = styled(Nav)`
    text-align: center;
    margin: auto 0 1rem 0;
    ul {
        display: flex;
        justify-content: center;

        margin: 0 0 0.5rem 0;
    }
`;

const SocialIconA = styled.a`
    width: 25px;
    height: 25px;
    margin: 0 0.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none !important;
    color: inherit;

    &:hover {
        background-color: black;
        color: white;
    }

    &:first {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`;


class PrimaryHeaderBase extends Component {
    render() {
        const Header = styled.header`
            display: none;
            align-items: center;
            flex-direction: column;
            background-color: white;
            box-shadow: 2px 0px 5px grey;
            z-index: 2;
            padding-top: 7.0rem;

            @media screen and (min-width: 930px) {
                width: ${headerWidthDesktop};
                display:flex;
            }
        `;

        return (
            <Header>
                <LogoImg src={Logo} alt="Hyungmo Gu"/>
                <PrimaryNav>
                    <h3><NavLink to="/">Hyungmo Gu</NavLink></h3>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/works">Works</NavLink></li>
                        <li><NavLink to="/resume">Resume</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </PrimaryNav>
                <SocialNav>
                    <ul>
                        <li><SocialIconA href="https://www.linkedin.com/in/hyungmo-gu/"><FontAwesomeIcon icon={faLinkedinIn} /></SocialIconA></li>
                        <li><SocialIconA href="https://github.com/hyungmogu"><FontAwesomeIcon icon={faGithub}/></SocialIconA></li>
                    </ul>
                    <div>Hyungmo Gu</div>
                    <div className="small">Thank you for visiting!</div>
                </SocialNav>
            </Header>
        );
    }
};

const PrimaryHeader = React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <PrimaryHeaderBase
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


class PrimaryHeaderMobileBase extends Component {
    toggleMenu = () => {
        this.props.appContext.handlers.handleToggleMenu();
    }

    render() {
        const Header = styled.header`
            display: ${this.props.appContext.state.toggled ? "initial" : "none"};
            position:fixed;
            z-index: 2;
            background-color: white;
            top: 0;
            bottom:0;

            & > nav {
                display: flex;
                height: ${headerHeight};
                padding: ${headerPaddingHeight} 1.5rem;
                align-items: center;
            }

            & > section {
                padding: 0 1.5rem 1.5rem 1.5rem;
                display: flex;
                flex-direction: column;
                height: calc(100vh - (${headerHeight} + ${headerPaddingHeight}*2));
            }

            @media screen and (min-width: 930px) {
                display: none;
            }
        `;

        return (
            <Header>
                <nav>
                    <div onClick={this.toggleMenu}><FontAwesomeIcon icon={faTimes} /></div>
                </nav>
                <section>
                    <LogoImg src={Logo} alt="Hyungmo Gu"/>
                    <PrimaryNav>
                        <h3><NavLink onClick={this.toggleMenu} to="/">Hyungmo Gu</NavLink></h3>
                        <ul>
                            <li><NavLink onClick={this.toggleMenu} to="/">Home</NavLink></li>
                            <li><NavLink onClick={this.toggleMenu} to="/about">About</NavLink></li>
                            <li><NavLink onClick={this.toggleMenu} to="/works">Works</NavLink></li>
                            <li><NavLink onClick={this.toggleMenu} to="/resume">Resume</NavLink></li>
                            <li><NavLink onClick={this.toggleMenu} to="/contact">Contact</NavLink></li>
                        </ul>
                    </PrimaryNav>
                    <SocialNav>
                        <ul>
                            <li><SocialIconA href="https://www.linkedin.com/in/hyungmo-gu/"><FontAwesomeIcon icon={faLinkedinIn} /></SocialIconA></li>
                            <li><SocialIconA href="https://github.com/hyungmogu"><FontAwesomeIcon icon={faGithub}/></SocialIconA></li>
                        </ul>
                        <div>Hyungmo Gu</div>
                        <div className="small">Thank you for visiting!</div>
                    </SocialNav>
                </section>
            </Header>
        );
    }
};

const PrimaryHeaderMobile = React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <PrimaryHeaderMobileBase
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


class SecondaryHeaderBase extends Component {
    toggleMenu = () => {
        this.props.appContext.handlers.handleToggleMenu();
    }

    render() {
        const Header = styled.header`
            background-color: white;
            height: ${headerHeight};
            padding: ${headerPaddingHeight};
            box-shadow: 0px 2px 5px grey;
            position: fixed;
            width: calc(100% - ${headerPaddingHeight} * 2);
            nav {
                display: flex;
                justify-content: space-between;
                align-items:center
            }

            @media screen and (min-width: 930px) {
                display: none;
            }
        `;

        return (
            <Header>
                <nav>
                    <div onClick={this.toggleMenu}><FontAwesomeIcon icon={faBars}/></div>
                    <Nav><strong><NavLink to="/">Hyungmo Gu</NavLink></strong></Nav>
                    <div></div>
                </nav>
            </Header>
        );
    }
};

const SecondaryHeader = React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <SecondaryHeaderBase
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));


export {
    PrimaryHeader,
    PrimaryHeaderMobile,
    SecondaryHeader
};