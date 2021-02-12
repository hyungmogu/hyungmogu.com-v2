import React, { Component } from 'react';

import { AppConsumer } from '../components/Context';
import Resume from '../components/Resume';
import { PrintButton } from '../components/Buttons';


class ResumeScreen extends Component {
    render() {
        const data = this.props.appContext.data;
        const pdfURL = this.props.appContext.data.resume.pdfURL;
        return (
            <section className="content content-resume">
                <header class="header--secondary p-6">
                    <h2>Resume</h2>
                </header>
                <Resume data={data}/>
                <PrintButton href={pdfURL}/>
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