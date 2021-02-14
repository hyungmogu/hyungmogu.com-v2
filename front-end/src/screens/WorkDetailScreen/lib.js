import styled from 'styled-components';


export function DemoSection(props) {
    const Section = styled.section`
        margin: 1rem 1rem 0 1rem;
        text-align: center;

        a:first-child {
            margin: 0 0.25rem 0 0;
        }
    `;

    const Button = styled.a`
        font-size: 0.8rem;
        font-weight: 400;
        display: inline-block;
        background-color: transparent;
        border: 1px solid transparent;
        text-align: center;
        padding: .375rem .75rem;
        border-radius: .25rem;
        text-decoration: none;
    `;

    const ButtonPrimary = styled(Button)`
        color: #fff;
        background-color: black;
        border-color: black;
    `;

    const ButtonPrimaryOutline = styled(Button)`
        border-color: black;
        color: black;
    `;

    return (
        <Section>
            {props.data.demoURL !== "#" && <ButtonPrimary href={props.data.demoURL}>See Demo</ButtonPrimary>}
            <ButtonPrimaryOutline href={props.data.sourceURL}>Source Code</ButtonPrimaryOutline>
        </Section>
    );
}

export function WorkSummarySection(props) {
    const JumbotronSection = styled.section`
        min-height: 17rem;
        text-align: center;

        & > div {
            max-width: 38.5rem;
            margin: 0 auto;
        }

        @media screen and (min-width: 930px) {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    `;

    const TechUsedSection = styled.section`
        margin: 0 0 2rem 0;
    `;

    const HighlightsSection = styled.section`
        margin: 0 0 2rem 0;
    `;

    return (
        <>
            <JumbotronSection>
                <div>
                    <h2>{props.data.title}</h2>
                    <p>{props.data.shortDescription}</p>
                    <p>{props.data.date}</p>
                    <DemoSection data={props.data}/>
                </div>
            </JumbotronSection>
            <TechUsedSection>
                <h3>Technologies Used</h3>
                <ul>
                    {
                        props.data.techUsed.map(element => {
                            return (
                                <li>
                                    <strong>{element.name}</strong>: {element.items.join(", ")}
                                </li>
                            );
                        })
                    }
                </ul>
            </TechUsedSection>
            {
                props.data.highlights && props.data.highlights.length > 0 && (
                    <HighlightsSection>
                        <h3>Highlights</h3>
                        <ul>
                            {
                                props.data.highlights.map(highlight => {
                                    return (
                                        <li>{highlight}</li>
                                    );
                                })
                            }
                        </ul>
                    </HighlightsSection>
                )
            }
        </>
    );
}

export function ImagesSection(props) {
    const Img = styled.img`
        width: 100%;
        margin: 0 0 0.75rem 0;
    `;

    return (
        <section>
            {
                props.data.images.map((imageURL, index) => {
                    return <Img src={imageURL} alt={"Responsive image " + index} />
                })
            }
        </section>
    );
}