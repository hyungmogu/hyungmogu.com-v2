import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
class WorkDetailScreen extends Component {

    getWork = (id, works) => {

        let res = works.find(element => element.id === id);

        if (res === -1) {
            console.error("getWork: element not found");
        }

        return res;
    }

    render() {
        let work = this.getWork(parseInt(this.props.match.params.id), this.props.appContext.data.resume.projectExp);

        return (
            <section className="content contentworks_detail">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <section class="jumbotron">
                    <div>
                        <h2>{work.title}</h2>
                        <p>
                            {work.shortDescription}
                        </p>
                        <p>
                            {work.date}
                        </p>
                        <div>
                            {work.demoURL !== "#" && <a href={work.demoURL} class="btn btn--primary small">See Demo</a>}
                            <a href={work.sourceURL} class="btn btn--primary-outline small">Source Code</a>
                        </div>
                    </div>
                </section>
                <div class="ml-4 mr-4">
                    <article>
                        <section class="mb-8 mt-8">
                            <h3>Technologies Used</h3>
                            <ul>
                                {
                                    work.techUsed.map(element => {
                                        return (
                                            <li>
                                                <strong>{element.name}</strong>: {element.items.join(", ")}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </section>
                        {
                            work.highlights && work.highlights.length > 0 && (
                                <section class="mb-8 mt-8">
                                    <h3>Highlights</h3>
                                    <ul>
                                        {
                                            work.highlights.map(highlight => {
                                                return (
                                                    <li>{highlight}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </section>
                            )
                        }

                        <section class="images text-center mb-8">
                            {
                                work.images.map((imageURL, index) => {
                                    return <img src={imageURL} class="img-fluid mb-3" alt={"Responsive image " + index} />
                                })
                            }
                        </section>

                        <section class="text-center mb-8">
                            <div>
                            {work.demoURL !== "#" && <a href={work.demoURL} class="btn btn--primary small">See Demo</a>}
                                <a href={work.sourceURL} class="btn btn--primary-outline small">Source Code</a>
                            </div>
                        </section>
                    </article>
                </div>
            </section>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <WorkDetailScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));