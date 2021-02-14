import React, { Component } from 'react';
import styled from 'styled-components';

import { Screen, H3 } from '../lib';


class AboutScreen extends Component {
    render() {
        const H3Extended = styled(H3)`
            font-size: 2.5rem;

            @media screen and (min-width: 930px) {
                font-size: 2.9rem;
            }
        `;

        const P = styled.p`
            max-width: 38.5rem;
        `;

        return (
            <Screen title={"About"}>
                <H3Extended>Hyungmo Gu</H3Extended>
                <P> is a dedicated and energetic software developer with 2 years of industry experience living in Calgary, Canada.</P>
                <P>Driven by his love to learn and create new applications, aside from the work hours, he can be found in Github pushing his latest works to repositories.</P>
                <P className="small"><i>To my love, whom provided nothing but warmth and support to make this website and my 6 years journey as software developer possible.</i></P>
            </Screen>
        );
    }
}

export default AboutScreen;

