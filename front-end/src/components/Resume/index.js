import styled from 'styled-components';

import { WorkExpItem, ProjectExpItem,
         EducationItem, ResumeHeader } from './lib';

function Resume(props) {
  const Main = styled.section`
    font-family: Arial, Helvetica, sans-serif;
    max-width: 700px;
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

  const contact = props.data.contact;
  const highlights = props.data.resume.highlights;
  const techSkills = props.data.resume.techSkills;
  const workExp = props.data.resume.workExp;
  const projectExp = props.data.resume.projectExp;
  const education = props.data.resume.education;

  return (
    <Main>
        <ResumeHeader {...contact}/>
        <section className="qualification">
            <H2><u>Highlights of Qualification</u></H2>
            <Ul>
              {highlights.map(item => <li>{item}</li>)}
            </Ul>
        </section>
        <section>
            <H2><u>Technical Skills</u></H2>
            <p>{techSkills.join(", ")}</p>
        </section>
        <section className="work-experience">
            <H2><u>Work Experience</u></H2>
            {workExp.map(item => <WorkExpItem {...item} />)}
        </section>
        <section className="project-experience">
            <H2><u>Project Experience</u></H2>
            {projectExp.map(item => item.includeInResume && <ProjectExpItem {...item} />)}
        </section>
        <section className="education">
            <H2><u>Education</u></H2>
            {education.map(item => <EducationItem {...item} />)}
        </section>
    </Main>
  );
}

export default Resume;
