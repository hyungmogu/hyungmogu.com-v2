import React, { Component } from 'react';

import { AppConsumer } from '../../components/Context';
import WorkListItem from '../../components/WorkListItem';
import { Screen } from '../lib';

class WorksScreen extends Component {

    render() {
        let works = this.props.appContext.data.resume.projectExp;

        return (
            <Screen title={"Works"}>
                {works.map((value, index) => <WorkListItem key={index+1} work={value}/>)}
            </Screen>
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

