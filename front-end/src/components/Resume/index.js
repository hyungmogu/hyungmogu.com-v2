import styled from 'styled-components';

import { data } from './data';
import { WorkExpItem, ProjectExpItem,
         EducationItem, ResumeHeader } from './lib';

function Resume() {
  const Main = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    max-width: 700px;
    margin: 0 1em 2em 1em;
    padding: 3em 3em;
    background: white;

    @media only screen and (min-width: 820px) {
      margin: 0 auto;
    }
    @media only screen and (min-width: 930px) {
      margin: 0 auto 2em auto;
    }
  `;

  const H2 = styled.h2`
    margin-bottom: 0.5em;
    margin-top: 0;
  `;

  const Ul = styled.ul`
    padding-left: 20px;
  `;

  return (
    <Main>
        <ResumeHeader/>
        <section className="qualification">
            <H2><u>Highlights of Qualification</u></H2>
            <Ul>
              {data.highlights.map(item => <li>{item}</li>)}
            </Ul>
        </section>
        <section>
            <H2><u>Technical Skills</u></H2>
            <p>{data.techSkills.join(", ")}</p>
        </section>
        <section className="work-experience">
            <H2><u>Work Experience</u></H2>
            {data.workExp.map(item => <WorkExpItem {...item} />)}
        </section>
        <section className="project-experience">
            <H2><u>Project Experience</u></H2>
            {data.projectExp.map(item => <ProjectExpItem {...item} />)}
        </section>
        <section className="education">
            <H2><u>Education</u></H2>
            {data.education.map(item => <EducationItem {...item} />)}
        </section>
    </Main>
  );
}

export default Resume;
