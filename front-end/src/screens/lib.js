import { useLocation } from 'react-router-dom'
import styled from 'styled-components';
import { headerWidthDesktop } from '../components/Navigation';

export const H1 = styled.h1`
    margin-top: 0;
`;

export const H3 = styled.h3`
    margin-top: 0;
`;

export function Screen(props) {
    const location = useLocation();

    const ContentSection = styled.section`
        width: 100vw;
        margin-top: 4.0rem;

        @media screen and (min-width: 930px) {
            width: calc(100vw - ${headerWidthDesktop});
            margin-top: 0;
            overflow-y: scroll;
        }
    `;

    const Header = styled.header`
        margin: 1.5rem;
    `;

    const H2 = styled.h2`
        margin: 0;
    `;

    if (location.pathname === "/") {
        const Article = styled.article`
            margin: 5rem 2rem 0 2rem;
            color: white;
            max-width: 430px;

            @media screen and (min-width: 930px) {
                margin-top: 10rem;
                margin-left: 5rem;
                max-width: 430px;
            }
        `;

        return (
            <ContentSection>
                <div className="background-img"></div>
                <Article>
                    {props.children}
                </Article>
            </ContentSection>
        );
    } else if (location.pathname === "/works") {
        const Article = styled.article`
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            padding: 1.5rem;
            margin: 0 1rem;

            @media screen and (min-width: 750px) {
                justify-content: space-between ;
            }

            @media screen and (min-width: 930px) {
                justify-content: initial ;
            }
        `;

        return (
            <ContentSection>
                <Header>
                    <H2>{props.title}</H2>
                </Header>
                <Article>
                    {props.children}
                </Article>
            </ContentSection>
        );
    } else if (location.pathname === "/resume") {
        const Article = styled.article`
            padding: 1.5rem 0 0 0;
            margin: 0 1rem 1rem 1rem;

            @media screen and (min-width: 930px) {
                padding: 1.5rem;
            }
        `;
        return (
            <ContentSection>
                <Header>
                    <H2>{props.title}</H2>
                </Header>
                <Article>
                    {props.children}
                </Article>
            </ContentSection>
        );
    } else {
        const Article = styled.article`
            padding: 1.5rem;
            margin: 0 1rem;
        `;
        return (
            <ContentSection>
                <Header>
                    <H2>{props.title}</H2>
                </Header>
                <Article>
                    {props.children}
                </Article>
            </ContentSection>
        );
    }
}