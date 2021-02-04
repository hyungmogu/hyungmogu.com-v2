import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
import Resume from '../components/Resume';
import { PrintButton } from '../components/Buttons';


class ResumeScreen extends Component {
    render() {
        let resume = this.props.appContext.data.resume;
        return (
            <section className="content content-resume">
                <header class="header--secondary p-6">
                    <h2>Resume</h2>
                </header>
                <Resume/>
                <PrintButton href={resume}/>
            </section>
        );
    }
}


export default React.forwardRef((props, ref) => (
    <AppConsumer>
        { appContext =>
            <ResumeScreen
                {...props}
                appContext={appContext}
                ref={ref}
            />
        }
    </AppConsumer>
));