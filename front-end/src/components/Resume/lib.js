import styled from 'styled-components';
import { data } from './data';


const Article = styled.article`
  margin-bottom: 1em;
`;

const Div = styled.div`
  &:first-child {
    flex-grow: 1;
  }
`;

const Header = styled.header`
  @media only screen and (min-width: 660px) {
    display: flex;
  }
`;

const Hr = styled.hr`
  border-color: black;
  border-width: 2px;
`;

const H1 = styled.h1`
  margin-bottom: 0.5em;
  margin-top: 0;
`;

const H3 = styled.h3`
  margin-bottom: 0.5em;
  margin-top: 0;
`;

const P = styled.p`
  margin-bottom: 0;
  margin-top: 0;
`;

const Ul = styled.ul`
  padding-left: 20px;
`;


export function EducationItem(props) {
  return (
    <Article>
      <Header>
        <Div>
          <H3>{props.name}</H3>
          <P>{props.location}</P>
        </Div>
        <Div>
          <P>{props.date}</P>
        </Div>
      </Header>
    </Article>
  );
}


export function ProjectExpItem(props) {
  return (
    <Article>
      <Header>
        <Div>
          <H3>{props.name}</H3>
          <a href={props.url}>{props.url}</a>
        </Div>
        <Div>
            <P>{props.date}</P>
        </Div>
      </Header>
      <Ul>
        {props.details.map(detail => <li>{detail}</li>)}
      </Ul>
    </Article>
  );
}

export function WorkExpItem(props) {
  return (
    <Article>
      <Header>
        <Div>
          <H3>{props.title}</H3>
          <P>{props.location}</P>
        </Div>
        <Div>
          <P>{props.date}</P>
        </Div>
      </Header>
      <Ul>
        {props.details.map(detail => <li>{detail}</li>)}
      </Ul>
    </Article>
  );
}


export function ResumeHeader(props) {
  const Header = styled.header`
    @media only screen and (min-width: 1000px) {
      text-align: center;
    }
  `;

  const Ul = styled.ul`
    list-style: none;
    padding: 0;

    @media only screen and (min-width: 1000px) {
      display: flex;
    }
  `;

  const Li = styled.li`
    flex-grow: 1;

    &:last-child {
      border-right: none;
    }

    @media only screen and (min-width: 1000px) {
      flex-grow: 1;
      border-right: black solid 1px;
    }
  `;

  return (
    <Header>
      <H1>Hyungmo (Moe) Gu</H1>
      <P>Calgary, AB, Canada</P>
      <Ul>
        <Li>Web: <a href={data.info.web.url}>{data.info.web.label}</a></Li>
        <Li>LinkedIn: <a href={data.info.linkedIn.url}>{data.info.linkedIn.label}</a></Li>
        <Li><a href={'mailto:' + data.info.email}>{data.info.email}</a></Li>
        <Li>T: {data.info.tel}</Li>
      </Ul>
      <Hr></Hr>
    </Header>
  );
}