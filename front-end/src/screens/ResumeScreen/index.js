import React, { Component } from 'react';

import { AppConsumer } from '../../components/Context';
import Resume from '../../components/Resume';
import { PrintButton } from '../../components/Buttons';
import { Screen } from '../lib';


class ResumeScreen extends Component {
    render() {
        const data = this.props.appContext.data;
        const pdfURL = this.props.appContext.data.resume.pdfURL;
        return (
            <Screen title={"Resume"}>
                <Resume data={data}/>
                <PrintButton href={pdfURL}/>
            </Screen>
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