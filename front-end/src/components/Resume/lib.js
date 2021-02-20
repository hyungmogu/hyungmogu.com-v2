import styled from 'styled-components';

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
  font-size: 1.5em;
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
          <H3>{props.title}</H3>
          <a href={props.sourceURL}>{props.sourceURL}</a>
        </Div>
        <Div>
            <P>{props.date}</P>
        </Div>
      </Header>
      <Ul>
        {props.highlights.map(detail => <li>{detail}</li>)}
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
        {props.highlights.map(highlight => <li>{highlight}</li>)}
      </Ul>
    </Article>
  );
}


export function ResumeHeader(props) {
  const Header = styled.header`
    @media only screen and (min-width: 1130px) {
      text-align: center;
    }
  `;

  const Ul = styled.ul`
    list-style: none;
    padding: 0;

    @media only screen and (min-width: 1130px) {
      display: flex;
    }
  `;

  const Li = styled.li`
    flex-grow: 1;

    &:last-child {
      border-right: none;
    }

    @media only screen and (min-width: 1130px) {
      flex-grow: 1;
      border-right: black solid 1px;
    }
  `;

  return (
    <Header>
      <H1>Hyungmo (Moe) Gu</H1>
      <P>Calgary, AB, Canada</P>
      <Ul>
        <Li>Web: <a href={props.web.url}>{props.web.label}</a></Li>
        <Li>LinkedIn: <a href={props.linkedIn.url}>{props.linkedIn.label}</a></Li>
        <Li><a href={'mailto:' + props.email}>{props.email}</a></Li>
        <Li>T: {props.tel}</Li>
      </Ul>
      <Hr></Hr>
    </Header>
  );
}