import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';

import WorkListItem from '../components/WorkListItem';

class WorksScreen extends Component {

    render() {

        let works = this.props.appContext.data.works;

        return (
            <section className="content content-works">
                <header class="header--secondary p-6">
                    <h2>Works</h2>
                </header>
                <div>
                    <article>
                        {works.map((value, index) => {
                            return <WorkListItem key={index+1} work={value}/>
                        })}
                    </article>
                </div>
            </section>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <WorksScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));

